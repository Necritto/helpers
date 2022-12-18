/**
 * @param {string} color
 * @return {string}
 */
export default function(color) {
    const bigint = parseInt(color.split('#')[1], 16);
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const r = (bigint >> 16) & 255;

    return `rgba(${r},${g},${b}, 0.9)`;
};
