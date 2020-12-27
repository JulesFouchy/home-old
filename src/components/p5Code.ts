import { h } from 'hyperapp'

// Don't forget to add <script src="https://julesfouchy.github.io/p5.js-widget/p5-widget.js"></script> in the pages using this component
export default (code: string) => {
    return h(
        'script',
        {
            type: 'text/p5',
        },
            code
    )
}