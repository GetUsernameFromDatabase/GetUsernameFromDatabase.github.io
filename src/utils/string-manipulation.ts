/**
 * Please use tailwind if possible:
 * - `capitalize` if you can https://tailwindcss.com/docs/text-transform
 */
export function capitalizeWords(input: string): string {
  return input
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Please use tailwind if possible:
 * - `line-clamp` https://tailwindcss.com/docs/line-clamp
 * - `truncate` https://tailwindcss.com/docs/text-overflow#truncate
 */
export function truncateText(input: string, maxLength = 50): string {
  const tooLongString = '...';
  /** Max length that takes {@link tooLongString} into account */
  const trueMaxLength = maxLength - tooLongString.length;

  // I don't want to cut up words
  const lastSpaceIndex = input.lastIndexOf(' ', trueMaxLength);
  if (lastSpaceIndex === -1) {
    return input.slice(0, trueMaxLength) + tooLongString;
  }
  return input.slice(0, lastSpaceIndex) + tooLongString;
}
