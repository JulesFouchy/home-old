import { h, app } from 'hyperapp'
import toc from '../toc'
import PageView from '../../../../components/PageView'

const view = () =>
    h('p', {}, '2 Lets draw a circle')

app({
    init: {},
    view: PageView({
        view,
        toc,
    }),
    node: document.body,
})
