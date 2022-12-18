/**
 * @param {T[]} arr
 * @param {string} prop
 * @return {T[]}
 */
export default function(arr, prop) {
    return arr.filter((arrItem, index, arrCopy) => {
        return arrCopy.findIndex((item) => (item[prop] === arrItem[prop])) === index;
    });
};
