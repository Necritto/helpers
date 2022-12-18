export const copyToClipboard = async(string) => {
    await navigator.clipboard.writeText(string);
};
