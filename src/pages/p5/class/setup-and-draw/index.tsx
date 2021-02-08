import { app, h } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import LineJump from '../../../../components/LineJump'
import FileName from '../../../../components/FileName'

const view = () =>
<div>
    In p5, there are two very important functions that you have to fill in : {InlineCode("setup")} and {InlineCode("draw")}
    
    <h2>Setup</h2>
    <div class="highlight">
        {InlineCode("setup")} will be called once at the start of your programm :
        this is where you choose the size of your canvas, initialize variables <i>etc.</i>
    </div>
    If you are using my template you don't need to worry about choosing a size :
    it is done automatically, the default being a square that fills the window with a 25px margin.
    (You can change this by modifying the {InlineCode("__desiredCanvasWidth")} and {InlineCode("__desiredCanvasHeight")} functions
    inside {FileName("src/p6/chooseCanvasSize.ts")}).
    The nice thing about specifying the size the way I did is that when the window resizes, the canvas is adapted automatically.

    <h2>Draw</h2>
    <div class="highlight">
        {InlineCode("draw")} will be called over and over, 60 times a second.
    </div>
    This is where you put your drawing and animation code.

    {LineJump()}
    <i>With that said, let's start drawing !</i>
</div>

app({
    init: {},
    view: PageView({
        view: view,
        info,
    }),
    node: document.body,
})