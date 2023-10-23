export function capitalizeWords(input: string): string {
  return input
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Was supposed to be for truncating text -- decided to use CSS instead
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
