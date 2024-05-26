export default function downloadPdf() {
    const link = document.createElement('a');
    link.href = '/pdf/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
