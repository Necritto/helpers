/**
 * @param {Number} number
 * @return {String}
 */
export const breakNumberToCategories = (number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
