import { h, app } from 'hyperapp'
import Link from '../../components/Link'
//

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