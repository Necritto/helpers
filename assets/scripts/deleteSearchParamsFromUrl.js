/**
 * @param {string} urlString
 * @param {string[]} params
 * @returns {void}
 */
export const deleteSearchParamsFromUrl = (urlString = '', params = []) => {
    const url = new URL(urlString);
    const searchParams = url.searchParams;
    for(let param of params) {
        searchParams.delete(param);
    }
    url.search = searchParams.toString();
    window.history.replaceState({}, document.title, url);
};
