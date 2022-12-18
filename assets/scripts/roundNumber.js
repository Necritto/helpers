/**
 * @param {number} number
 * @param {number} base
 * @return {number}
 */
export const roundNumber = (number, base = 2) => {
    return +number.toFixed(base);
};

