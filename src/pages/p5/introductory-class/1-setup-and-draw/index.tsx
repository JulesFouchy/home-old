import { app, h } from 'hyperapp'
import toc from '../toc'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'

const view = () =>
<div>
    In p5, there are two very important functions that you have to fill in : {InlineCode("setup")} and {InlineCode("draw")}
    <h2>Setup</h2>
    {InlineCode("setup")} will be called once at the start of your programm : this is where you choose the size of your canvas, initialize variables <i>etc.</i>
</div>

app({
    init: {},
    view: PageView({
        view: view,
        toc,
    }),
    node: document.body,
})