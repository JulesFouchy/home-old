import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'

const view = () => 
<div>
    <h2>Shapes</h2>
        p5 knows how to draw quite a few shapes ! We will take a look at the most common ones here.
        <h3>Ellipse</h3>
            Ellipses are circles that can be wider in one direction (just like rectangles are squares
            that can be wider in one direction).
            <br/>
            We specify them by giving the center x and y, and then the radius
            (or two radii if we want to have a different size along the x and y axes)
        <h3>Rect</h3>
                
    <h2>Colors</h2>
        {InlineCode('fill')} is used to color the inside of the shape, and {InlineCode('stroke')} is used for its boundary.
        <br/>
        The default way of specifing a color is by giving its RGB values. For example {InlineCode('fill(255, 145, 23)')}
        will give some nice orange. (You can change this default by using the {InlineCode('colorMode')} function)
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
