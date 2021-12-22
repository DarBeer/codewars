export function descendingOrder(n: number): number {
  return +(n.toString().split("")
                       .sort((a, b) => a > b ? -1 : a < b ? 1 : 0)
                       .join(""));
}