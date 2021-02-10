import { h } from 'hyperapp'

export default (pdfSrc: any) => h(
    'iframe',
    {
        src: pdfSrc,
        width: "100%",
        height: "1000px",
    }
)