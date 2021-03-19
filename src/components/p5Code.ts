import { h } from 'hyperapp'

const LoadP5Widget = () => setTimeout(() => {
    const head_ID = document.getElementsByTagName("head")[0]
    const script_element = document.createElement('script')
    script_element.type = 'text/javascript'
    script_element.src = 'https://julesfouchy.github.io/p5.js-widget/p5-widget.js'
    head_ID.appendChild(script_element);
}, 1000)

const p5Code = (code: string) => {
    return h(
        'script',
        {
            type: 'text/p5',
        },
            code
    )
}

export {p5Code, LoadP5Widget}