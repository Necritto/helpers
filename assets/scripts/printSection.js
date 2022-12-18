/**
 * @param {HTMLElement} printContent
 * @return {void}
 */
export const printSection = (printContent) => {
    const printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

    printWindow.document.write(printContent.innerHTML);

    [...document.head.children].forEach((child) => {
        if (child.nodeName === 'STYLE') {
            const element = printWindow.document.createElement('style');
            element.innerHTML = child.innerHTML;
            printWindow.document.head.appendChild(element);
        }

        if (child.nodeName === 'LINK' && child.rel === 'stylesheet') {
            const element = printWindow.document.createElement('link');
            element.setAttribute('rel', 'stylesheet');
            element.setAttribute('type', 'text/css');
            element.setAttribute('href', child.href);
            printWindow.document.head.appendChild(element);
        }
    });

    printWindow.document.close();
    printWindow.setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }, 1000);
};
