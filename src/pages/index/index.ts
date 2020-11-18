import { h, app } from 'hyperapp'
import Link from '../../components/Link'
//
import Toc from '../../components/TableOfContents'

const view = () =>
    h('div', {}, [
        'Hello Web',
        Link('hexagons.html'),
    ])

app({
    init: {},
    view: view,
    node: document.body,
})