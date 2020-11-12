import { h, app } from 'hyperapp'
import toc from '../toc'
import PageView from '../../../../components/PageView'

const view = () =>
    h('p', {}, '0 I love p5')

app({
    init: {},
    view: PageView({
        view,
        toc,
    }),
    node: document.body,
})
