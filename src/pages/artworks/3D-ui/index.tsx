import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import { Link } from '../../../components/Link'
import InlineCode from '../../../components/InlineCode'

const view = () => 
<div>
<iframe width="962" height="541" src="https://www.youtube.com/embed/A_lApwgY1qk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>
<i>A single fragment shader ({Link("https://pastebin.com/Pr2psThD", "available here")}), rendered using {Link("https://github.com/IMAC-projects/is0", "is0")}</i>
<br/>
<i>Made in collaboration with Enguerrand de Smet during a live coding session on the {Link('https://www.facebook.com/LaETaverne', 'E-Taverne')}.</i>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
