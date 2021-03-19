import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import { Link } from '../../../../components/Link'
import {p5Code, LoadP5Widget} from '../../../../components/p5Code'

LoadP5Widget()

const view = () => 
<div>

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

    <br/><br/>
    It can also give you a random element from a list
    <br/><br/>
    {p5Code(`
const colorsList = ["#4287f5", "#f0243f", "#94f268"]

const myColor = random(colorsList) // Pick a random color from the list

fill(myColor)
ellipse(width/2, height/2, 100)
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

    <h2>p5.Vector</h2>
    A p5.Vector is a type that holds two (or three) coordinates : x, y and z. <br/>
    It has a lot of usefull methods like getting its length or direction, and you can do math operations between them. <br/>
    PS : check {Link("https://p5js.org/reference/#/p5.Vector", "the documentation")} !
    <br/><br/>
    One nice thing in particular is that you can create them from an angle :
    <br/><br/>
    {p5Code(`
translate(width/2, height/2) // put (0, 0) in the center of the canvas because the vectors will be distributed around (0, 0)

for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 6) {
    const p = p5.Vector.fromAngle(angle).mult(100) // Vector of length 100 pointing in the direction of angle
    ellipse(p.x, p.y, 50)
}
    `)}

    <h2>Transforms : translate, rotate and scale</h2>
    When you start doing more complex things, keeping track of all the relative coordinates can get very annoying : <br/>
    Transforms can help you handle that very nicely ! <br/>
    Also, some things like drawing a square rotated by 45° cannot be done except with transforms !
    <br/><br/>
    <div className="highlight">
        Here is a nice tutorial about transforms : {Link("https://processing.org/tutorials/transform2d/")} <br/>
        It is using Processing and not p5, but the functions are exactly the same !
        (except that {InlineCode("pushMatrix")} is called {InlineCode("push")} in p5, and {InlineCode("popMatrix")} is called {InlineCode("pop")}).
    </div>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
