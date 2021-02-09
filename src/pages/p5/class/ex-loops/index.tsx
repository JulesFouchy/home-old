import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import LineJump from '../../../../components/LineJump'
import p5Code from '../../../../components/p5Code'
import { Link } from '../../../../components/Link'

const view = () => 
<div>
Hello ex
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
