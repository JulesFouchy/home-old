import { h, app } from 'hyperapp'
import Link from '../../components/Link'
//
import p5Toc from '../p5/introductory-class/toc'
import Toc from '../../components/TableOfContents'

const view = () =>
    h('div', {}, [
        'Hello Web',
        Link('hexagons.html'),
        Toc(p5Toc)
    ])

app({
    init: {},
    view: view,
    node: document.body,
})