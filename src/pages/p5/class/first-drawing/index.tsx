import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import LineJump from '../../../../components/LineJump'
import p5Code from '../../../../components/p5Code'
import { Link } from '../../../../components/Link'

const view = () => 
<div>
Here are all the basics of p5.
    <h2>width & height</h2>
    {InlineCode("width")} and {InlineCode("height")} are built-in variables that allow you to access the size of the sketch at any time.
    You will see me use them all the time, and you should really be using them to position your shapes relatively inside the canvas.
    For example {InlineCode("(width/2, height/2)")} will put the object at the center of the canvas.
    <h2>Shapes</h2>
        p5 knows how to draw quite a few shapes ! We will take a look at the most common ones here, and remember that you can find them <i>all</i> at {Link("https://p5js.org/reference/")}.
        <h3>Ellipse</h3>
            Ellipses are circles that can be wider in one direction (just like rectangles are squares
            that can be wider in one direction).
            <br/>
            We specify them by giving the center x and y, and then the radius
            (or two radii if we want to have different sizes along the x and y axes)
            <br/><br/>
            {p5Code(`
ellipse(
    width/2,  // center (x coordinate)
    height/2, // center (y coordinate)
    100,      // size (diameter) along the x-axis
    50        // size (diameter) along the y-axis
)

ellipse(
    width/2,     // center (x coordinate)
    height*0.75, // center (y coordinate)
    100          // size (diameter) 
)
        `)}
        <h3>Rect</h3>
            Rectangles use almost the same parameters as Ellipses. The big difference though is that the first two parameters
            are (by default) the coordinates of the top-left corner, not the center ! (You can change this with the {InlineCode("rectMode")} function)
        <br/><br/>
        {p5Code(`
// rectMode(CENTER)
rect(
    width/2,  // top-left corner (x coordinate) (or center if you used rectMode(CENTER))
    height/2, // top-left corner (y coordinate) (or center if you used rectMode(CENTER))
    100,      // size along the x-axis
    50        // size along the y-axis
)

rect(
    width/2,     // top-left corner (x coordinate) (or center if you used rectMode(CENTER))
    height*0.75, // top-left corner (y coordinate) (or center if you used rectMode(CENTER))
    100          // size 
)
        `)}
                
    <h2>Colors</h2>
        <div class="highlight">
            {InlineCode('fill')} is used to color the inside of the shape, and {InlineCode('stroke')} is used for its boundary.
            <br/>
            If you don't want any stroke, you can remove it by calling {InlineCode("noStroke()")}. And you can
            remove the fill by calling {InlineCode("noFill()")}.
        </div>
        The default way of specifing a color is by giving its RGB values. For example {InlineCode('fill(255, 145, 23)')}
        will give some nice orange. (You can make so that {InlineCode('fill')} takes in HSB or HSL values instead of RGB with the {InlineCode('colorMode')} function).
        <br/>
        You can also use an hexadecimal string like {InlineCode('"#FF9117"')}.
        <br/>
        <br/>
        Note that the colors (and other settings) you specify remain until you change them. So for example this will draw both the ellipse and the rectangle in orange.
        <br/><br/>
        {p5Code(`
// Choose an orange color and no stroke
fill(
    255, // Red   (between 0 and 255)
    145, // Green (between 0 and 255)
    23   // Blue  (between 0 and 255)
)
// fill("#FF9117")
noStroke()
// Draw some shapes
ellipse(100, 100, 50)
rect(200, 200, 100)
        `)}

    <h2>The coordinate system</h2>

    Important to note : the y-axis is pointing down ! So (0, 0) is the top-left of the canvas.
    If you prefer having (0, 0) as the center of the canvas, you can do {InlineCode("translate(width/2, height/2)")} before your start drawing.

    {LineJump()}
    Exercise : draw Mickey Mouse's face (it can be as simple as three circles ; additional details are welcome)

    <h2>random</h2>
    Returns a random number inside a given interval
    <br/><br/>
    {p5Code(`
const radius = 50
ellipse(
    random(radius, width  - radius), // Center x
    random(radius, height - radius), // Center y
    radius * 2                       // Diameter
)
    `)}

    <h2>lerp & lerpColor</h2>
    This is basically what allows you to make gradients.
    <br/><br/>
    {p5Code(`
for (let t = 0; t < 1; t += 0.1) {
    const diameter = lerp(
      20,  // start
      150, // end
      t    // progression percentage (between 0 and 1)
    )
    const col = lerpColor(color("#FFC003"), color("#6D32ED"), t)
    const x = lerp(10, width - 100, t)
    fill(col)
    noStroke()
    ellipse(x, height/2, diameter)
}
    `)}
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
