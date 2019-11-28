/**
 * Suffixes/Abbreviations/Etc.
 */

const weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months: string[] = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

const suffixedDate: Function = (dateNumber: number): string => {
  switch (dateNumber) {
    case 1 || 21 || 31:
      return `${dateNumber}st`;
    case 2 || 22:
      return `${dateNumber}nd`;
    case 3 || 23:
      return `${dateNumber}rd`;
    default:
      return `${dateNumber}th`;
  }
};

/**
 * Functions
 */

export const monthDate: Function = (dateObject: Date): string =>
  `${months[dateObject.getMonth()]} ${suffixedDate(dateObject.getDate())}`;
