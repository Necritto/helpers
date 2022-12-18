/**
 * @param {object} object
 * @param {string} value
 * @return {string}
 */
export const getObjectKeyByValue = ({object = {}, value}) => {
    return Object.keys(object).find((key) => object[key] === value) ?? '';
};
