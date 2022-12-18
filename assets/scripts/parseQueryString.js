/**
 * @param {boolean} parse
 * @return {object}
 */
export const parseQueryString = (parse = false) => {
    const searchParams = window?.location?.search;
    if (!searchParams) {
        return {};
    }

    return decodeURI(searchParams)
        .replace('?', '')
        .split('&')
        .map((param) => param.split('='))
        .reduce((values, [key, value]) => {
            let parsedValue = '';

            try {
                parsedValue = parse ? JSON.parse(decodeURIComponent(value)) : decodeURIComponent(value);
            } catch (error) {
                console.error(error);
            }

            if (parsedValue) {
                values[key] = parsedValue;
            }

            return values;
        }, {});
};
