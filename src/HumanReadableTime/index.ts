// custom Time class for storage data
class Time {
  // private fields
  private _hours: number;
  private _minutes: number;
  private _seconds: number;

  constructor(inicialSeconds: number) {
    // Convert seconds to hours, minutes and seconds
    this._hours = Math.floor(inicialSeconds / 60 / 60);
    this._minutes = Math.floor((inicialSeconds - this._hours * 60 * 60) / 60);
    this._seconds = inicialSeconds - this._hours * 60 * 60 - this._minutes * 60;
  }

  // Convert time to readable string
  public getReadableTime(): string {
    const hoursString: string = this._hours < 10 ? `0${this._hours}` : `${this._hours}`;
    const minutesString: string = this._minutes < 10 ? `0${this._minutes}` : `${this._minutes}`;
    const secondsString: string = this._seconds < 10 ? `0${this._seconds}` : `${this._seconds}`;
    return `${hoursString}:${minutesString}:${secondsString}`;
  }
}

// Execute functions 
export function humanReadable(seconds:number):string {
  const time: Time = new Time(seconds);
  return time.getReadableTime();
}