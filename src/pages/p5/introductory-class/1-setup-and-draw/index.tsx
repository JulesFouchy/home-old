import { app, h } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import LineJump from '../../../../components/LineJump'
import Highlight from '../../../../components/Highlight'

const view = () =>
<div>
    In p5, there are two very important functions that you have to fill in : {InlineCode("setup")} and {InlineCode("draw")}
    
    <h2>Setup</h2>
    {Highlight([InlineCode("setup"),` will be called once at the start of your programm :
    this is where you choose the size of your canvas, initialize variables `, h('i', {}, 'etc.')])}
    If you are using my template you don't need to worry about choosing a size :
    it is done automatically, the default being a square that fills the window with a 25px margin.
    (You can change this by modifying the {InlineCode("desiredCanvasWidth")} and {InlineCode("desiredCanvasHeight")} functions).
    The nice thing about specifying the size the way I did is that when the window resizes, the canvas is adapted automatically.

    <h2>Draw</h2>
    {Highlight([InlineCode("draw"),` will be called over and over, 60 times a second.`])}
    This is where you put your drawing and animation code.

    {LineJump()}
    <i>Whith that said, let's start drawing !</i>
</div>

app({
    init: {},
    view: PageView({
        view: view,
        info,
    }),
    node: document.body,
})