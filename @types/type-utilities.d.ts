type FlattenKeys<T, P = ''> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? K extends string
      ? `${P}${K}.${FlattenKeys<T[K]>}`
      : never
    : K extends string
    ? `${P}${K}`
    : never;
}[keyof T];
