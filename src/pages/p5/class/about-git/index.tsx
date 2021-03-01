import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import { Link } from '../../../../components/Link'
import InlineCode from '../../../../components/InlineCode'
import { isBoolean } from 'util'

const view = () =>
<div>
<iframe width="900" height="506" src="https://www.youtube.com/embed/VhUwDTQLVDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
