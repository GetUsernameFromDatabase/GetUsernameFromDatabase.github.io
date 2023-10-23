import { defu } from 'defu';
import { Duration } from 'luxon';

import type { IntRange } from '@type/my-type-utilities';

interface getLimitedDurationOptions {
  /**
   * How many property values to use from {@link Duration}
   * @default 2
   * @see https://moment.github.io/luxon/api-docs/index.html#durationfromobject
   */
  limit?: IntRange<1, 9>;
  /**
   * Wether to go from **bigger to smaller** *(year -> millisecond)* or not
   * @default true
   */
  biggerToSmaller?: boolean;
}

/**
 * Gets skimmed duration
 *
 * Meaning that it takes only the desired amount of properties from duration
 * @param duration {@link luxon} duration
 * @param userOptions {@link getLimitedDurationOptions}
 */
export function getSkimmedDuration(
  duration: Duration,
  userOptions?: getLimitedDurationOptions,
) {
  const defaultOptions: Required<getLimitedDurationOptions> = {
    biggerToSmaller: true,
    limit: 2,
  };
  const options = defu(userOptions, defaultOptions);

  const durationObject = duration.toObject();
  const entries = Object.entries(durationObject);
  if (!options.biggerToSmaller) entries.reverse();

  const newDurationObject: { [key: string]: unknown } = {};
  let index = 0;
  for (const [key, value] of entries) {
    if (index >= options.limit) break;
    if (value !== 0) {
      // eslint-disable-next-line security/detect-object-injection
      newDurationObject[key] = value;
      index++;
    }
  }
  return Duration.fromObject(newDurationObject);
}
