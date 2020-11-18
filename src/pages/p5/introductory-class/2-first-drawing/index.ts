import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'

const view = () =>
    h('p', {}, '2 Lets draw a circle')

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
