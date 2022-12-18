/**
 * @param {T[]} inputArr
 * @param {number} oldPlace
 * @param {number} newPlace
 * @return {T[]}
 */
export const swapArrayItemsByIndex = (inputArr, oldPlace, newPlace = 0) => {
    const copiedArr = inputArr.slice();
    if ((Math.min(oldPlace, newPlace) < 0) || (Math.max(oldPlace, newPlace) >= copiedArr.length)) {
        return null;
    }
    const [item] = copiedArr.splice(oldPlace, 1);
    copiedArr.splice((newPlace > 0) ? newPlace - 1 : 0, 0, item);

    return copiedArr;
};
