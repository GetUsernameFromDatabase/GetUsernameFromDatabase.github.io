/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'clsx'],
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
};

export default config;
