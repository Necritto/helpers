/**
 * @param {object} targetObject
 * @param {object} concatObject
 * @return {void}
 */
export const concatObjectsWithReplacement = (targetObject, concatObject) => {
    if (!targetObject || !concatObject) {
        return;
    }

    for (const [key, value] of Object.entries(concatObject)) {
        if (!Object.prototype.hasOwnProperty.call(targetObject, key)) {
            continue;
        }

        if ((Array.isArray(value) || typeof value !== 'object') && value !== null) {
            targetObject[key] = value;
            continue;
        }

        concatObjectsWithReplacement(targetObject[key], value);
    }
};
