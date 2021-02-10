import { app, h } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import Pdf from '../../../components/Pdf'
import pdf from '../pdf/3.pdf'

const view = () =>
<div>
    {Pdf(pdf)}
</div>

app({
    init: {},
    view: PageView({
        view: view,
        info,
    }),
    node: document.body,
})