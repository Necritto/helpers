/**
 * @param {number} delay
 * @return {Promise<void>}
 */
export const wait = (delay = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};
