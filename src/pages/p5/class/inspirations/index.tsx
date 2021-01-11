import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import { Link } from '../../../../components/Link'

const view = () =>
<div>
{Link("https://www.openprocessing.org/sketch/1057083", "Interference Patterns")}
<br/>
{Link("https://www.openprocessing.org/sketch/1054214", "Cool but not looping")}
</div>

app({
    init: {},
    view: PageView({
        view: view,
        info,
    }),
    node: document.body,
})