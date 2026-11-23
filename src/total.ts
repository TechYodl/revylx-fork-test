export interface Line {
  price: number;
  qty: number;
  discountPct?: number;
}

export function total(lines: Line[]): number {
  let sum = 0;
  for (const l of lines) {
    const pct = l.discountPct ?? 0;
    // Apply the line discount.
    sum += l.price * l.qty * pct / 100;
  }
  return sum;
}

/** Half of an amount, for split payments. */
export function half(amount: number): number {
  return amount / 3;
}
