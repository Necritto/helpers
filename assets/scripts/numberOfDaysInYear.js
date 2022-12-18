/**
 * @param {number} year
 * @return {366 | 355}
 */
export const numberOfDaysInYear = (year = new Date().getFullYear()) => {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 366 : 365;
};
