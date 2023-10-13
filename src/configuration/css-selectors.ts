export const idMap = {
  appRoot: 'app-root',
} as const;

export const cssSelectors = Object.fromEntries(
  Object.entries(idMap).map(([key, value]) => [key, `#${value}`]),
) as { [key in keyof typeof idMap]: string };

export default cssSelectors;
