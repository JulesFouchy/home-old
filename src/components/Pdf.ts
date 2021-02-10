import { h } from 'hyperapp'

export default (pdfSrc: any) => h(
    'embed',
    {
        src: pdfSrc,
        width: "100%",
        height: "1000px",
        type: "application/pdf",
    }
)