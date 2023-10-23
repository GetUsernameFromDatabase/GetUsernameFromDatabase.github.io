export type FlattenKeys<T, P = ''> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? K extends string
      ? `${P}${K}.${FlattenKeys<T[K]>}`
      : never
    : K extends string
    ? `${P}${K}`
    : never;
}[keyof T];

export type Enumerate<
  N extends number,
  Accumulator extends number[] = [],
> = Accumulator['length'] extends N
  ? Accumulator[number]
  : Enumerate<N, [...Accumulator, Accumulator['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
