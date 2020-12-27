import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import LineJump from '../../../../components/LineJump'

const view = () => 
<div>
Here are all the basics of p5, sorted by how likely they are to prove usefull to you one day.
    <h2>Shapes (Usefullness : 100%)</h2>
        p5 knows how to draw quite a few shapes ! We will take a look at the most common ones here.
        <h3>Ellipse</h3>
            Ellipses are circles that can be wider in one direction (just like rectangles are squares
            that can be wider in one direction).
            <br/>
            We specify them by giving the center x and y, and then the radius
            (or two radii if we want to have a different size along the x and y axes)
        <h3>Rect</h3>
                
    <h2>Colors (Usefullness : 100%)</h2>
        {InlineCode('fill')} is used to color the inside of the shape, and {InlineCode('stroke')} is used for its boundary.
        <br/>
        The default way of specifing a color is by giving its RGB values. For example {InlineCode('fill(255, 145, 23)')}
        will give some nice orange. (You can change this default by using the {InlineCode('colorMode')} function).
        <br/>
        If you don't want any stroke, you can remove it by calling {InlineCode("noStroke()")}. And you can also
        remove the fill by calling {InlineCode("noFill()")}
        <br/>
        Note that the colors (and other settings) you specify remain until you change them. So for example calling
        {Code(
            `fill(255, 0, 0)
            ellipse(0, 0, 50)
            rect(200, 200, 100, 100)
            `
        )}
        will draw both the ellipse and the rectangle in red.

    <h2>The coordinate system</h2>

    Important to note : the y-axis is pointing down ! So y = 0 means the top of the canva, and y = height means the bottom.
    The x-axis is pointing right, and 0 is the left of canvas.
    If you prefer having (0, 0) as the center of the canvas, you can do translate(width/2, height/2) before your start drawing.

    {LineJump()}
    Exercize : draw Mickey Mouse's face (it can be as simple as three circles ; additional details are welcome)

    <h2>Usefull functions</h2>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
