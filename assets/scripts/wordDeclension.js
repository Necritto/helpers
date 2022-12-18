/**
 * @param {object} props
 * @param {string} props.word
 * @param {number} props.number
 * @return {string}
 */
export const wordDeclension = ({word = 'час|часа|часов', number}) => {
    const forms = word.split('|');
    if (number % 10 === 1 && number % 100 !== 11) {
        return `${forms[0]}`;
    }
    if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return `${forms[1]}`;
    }

    return `${forms[2]}`;
};
