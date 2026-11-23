export interface Line {
  price: number;
  qty: number;
}

export function total(lines: Line[]): number {
  let sum = 0;
  for (const l of lines) sum += l.price * l.qty;
  return sum;
}
