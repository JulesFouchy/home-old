import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import { Link } from '../../../components/Link'

const view = () => 
<div>
    {Link('https://fb.watch/3HTNcbR2PS/', 'GAN : Growing mountain')}
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
