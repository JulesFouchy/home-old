import { app, h } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import Pdf from '../../../components/Pdf'
import pdf from '../pdf/3.pdf'
import pdfCorrige from '../pdf/3-corrige.pdf'

const view = () =>
<div>
    {Pdf(pdf)}
    {Pdf(pdfCorrige)}
</div>

app({
    init: {},
    view: PageView({
        view: view,
        info,
    }),
    node: document.body,
})