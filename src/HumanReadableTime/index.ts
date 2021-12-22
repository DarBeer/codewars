class Time {
  private _hours: number;
  private _minutes: number;
  private _seconds: number;

  public get hours(): number { return this._hours; }
  public get minutes(): number { return this._minutes }
  public get seconds(): number { return this._seconds }

  public get getReadableTime(): string {
    const hoursString: string = this._hours < 10 ? `0${this._hours}` : `${this._hours}`;
    const minutesString: string = this._minutes < 10 ? `0${this._minutes}` : `${this._minutes}`;
    const secondsString: string = this._seconds < 10 ? `0${this._seconds}` : `${this._seconds}`;
    return `${hoursString}:${minutesString}:${secondsString}`;
  }

  constructor(inicialSeconds: number) {
    this._hours = Math.floor(inicialSeconds / 60 / 60);
    this._minutes = Math.floor((inicialSeconds - this._hours * 60 * 60) / 60);
    this._seconds = inicialSeconds - this._hours * 60 * 60 - this._minutes * 60;
  }
}

export function humanReadable(seconds:number):string {
  const time: Time = new Time(seconds);
  return time.getReadableTime;
}