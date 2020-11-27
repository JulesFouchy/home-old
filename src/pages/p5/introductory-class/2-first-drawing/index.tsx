import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'

const view = () => 
<div>
    <h2>Shapes</h2>
        p5
        <h3>Ellipse</h3>
    <h3>Circle</h3>
    <h2>Colors</h2>
    <h2>Usefull functions</h2>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
