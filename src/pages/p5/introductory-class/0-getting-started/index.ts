import { h, app } from 'hyperapp'
import p5Toc from '../toc'
import Toc from '../../../../components/TableOfContents'

const view = () =>
    h('div', {}, 
    [
        h('p', {}, '0 I love p5'),
        Toc(p5Toc)
    ])

app({
    init: {},
    view: view,
    node: document.body,
})
