/**
 * @param {string} string
 * @return {string}
 */
export const toCamelCase = (string) => {
    return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};
