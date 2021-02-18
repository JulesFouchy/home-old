import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import p5Code from '../../../../components/p5Code'
import LoadP5Widget from '../../../../helper/LoadP5Widget'
import Hideable from '../../../../components/Hideable'
import { Link } from '../../../../components/Link'

LoadP5Widget()

const Ex1Help_State = Hideable()
const Ex1Help_Name = "Help : Split the problem in small steps"
const Ex1Help =
    <ul>
        <li>Can you draw one line of 8 squares ? This might involve a loop. (NB : we will worry about the color later. For now just leave them as white with a black stroke)</li>
        <li>Move the code you just wrote into a {InlineCode("lineOfSquares")} function and make sure you still get the same visual result.</li>
        <li>Adapt your {InlineCode("lineOfSquares")} function so that it takes as a parameter the y-coordinate where you want to draw the line.</li>
        <li>Now you should be able to use your improved {InlineCode("lineOfSquares")} function to draw the 8 lines ! NB : use a loop !</li>
        <li>Now let's handle the alternating colors. Go back to your {InlineCode("lineOfSquares")} function and try to adapt it (NB : the result might not work on the overall chessboard, but we are gonna focus on one line for now)
            You can either choose the color based on the current loop index value, or based on a global variable that you change at the end of each loop iteration.
        </li>
        <li>Finally, we must fix the pattern for the whole chessboard : the first line must start with a black square, but the second one with a white one, the third with a black again etc.
            Let's start by adding a parameter to {InlineCode("lineOfSquares")} that allows us to choose the color the line starts with.
        </li>
        <li>And then, how do we decide which line starts with which color ? It is gonna be very similar to how we did alternating colors on a single line : either use the loop index or a global variable.</li>
    </ul>

const Ex1Solution_State = Hideable()
const Ex1Solution_Name = "Solution"
const Ex1Solution =
    <div>
    <br/>
    {p5Code(`
for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
        if ((i+j)%2 == 0)
            fill("black")
        else
            fill("white")
        rect(i * width / 8, j * height / 8, width/8, height/8)
    }
}
`)}

    {p5Code(`
const N = 8
for (let k = 0; k < N*N; ++k) {
    fill((k + (N % 2 ? 0 : floor(k/N) % 2)) % 2 ? "white" : "black")
    rect((k%N) * width / N, floor(k/N) * height / N, width/N, height/N)
}
`)}
    </div>

const view = () => 
<div>
    <div className="highlight">
        Draw 100 rectangles. Lay them out as you want.
    </div>
    {/* {p5Code(`
const colors = ['red', 'green', 'blue']
noStroke()
for (let i = 0; i < 100; i++) {
    fill(random(colors), 150)
    rect(random(width), random(height), random(100), random(100))
}
`)} */}
    <br/>
    <div className="indent">
        {Link('https://p5-class-jf.github.io/100-rectangles-v1/', 'Example result')}
        <br/>
        {Link('https://github.com/p5-class-jf/100-rectangles-v1/blob/main/src/sketch.ts', 'Example solution')}
        <br/><br/>
        Bonus constraints :
        <ul>
            <li>Play with the alpha value (transparency) to make it more interesting when rectangles overlap.
                <br/>
                {Link('https://p5-class-jf.github.io/100-rectangles-v2/', 'Example result')}
                <br/>
                {Link('https://github.com/p5-class-jf/100-rectangles-v2/blob/main/src/sketch.ts', 'Example solution')}
                <br/>
            </li>
        </ul>
        <br />
    </div>
    <div className="highlight">
        Draw 100 ellipses. Try to make sure there is more of them around the center of the canvas.
    </div>
    <br/>
    <div className="indent">
        {Link('https://p5-class-jf.github.io/100-ellipses/', 'Example result')}
        <br/>
        {Link('https://github.com/p5-class-jf/100-ellipses/blob/main/src/sketch.ts', 'Example solution')}
        <br/><br/>
        Bonus constraints :
        <ul>
            <li>Play with the {Link('https://p5js.org/reference/#/p5/blendMode', 'Blend Mode')} to make it more interesting when ellipses overlap.</li>
        </ul>
        <br />
    </div>
    <div className="highlight">
        Make a chessboard pattern.
    </div>
    <br/>
    <div className="indent">
        {h(Ex1Help_State, Ex1Help_Name, Ex1Help)}
        <br/>
        {h(Ex1Solution_State, Ex1Solution_Name, Ex1Solution)}
        <br/>
        Bonus constraints :
        <ul>
            <li>Can you generalize to any number of grid cells ?</li>
            <li>Can you think of another tiling pattern ? Using three colors instead of two for example.</li>
            <li>Can you do it in less than 10 lines of code ? Less than 5 ?</li>
            <ul>
                <li>Avoid accumulative variables (compute everything based on the current loop indices instead of having global variables that change from one loop iteration to the next)</li>
                <li>Use one loop instead of two</li>
            </ul>
        </ul>
        <br />
    </div>

    <div className="highlight">
        Draw a rosace.
    </div>
    <br/>
    <div className="indent">
        {Link('https://p5-class-jf.github.io/rosace/', 'Example result')}
        <br/>
        {Link('https://github.com/p5-class-jf/rosace/blob/main/src/sketch.ts', 'Example solution')}
        <br/><br/>
        Bonus constraints :
        <ul>
            <li>How to colorize the rosace ? <br/>
            {Link('https://julesfouchy.github.io/p5_Rosace_Generator/', 'Example result')}
            <br/>
            {Link('https://github.com/JulesFouchy/p5_Rosace_Generator/blob/main/sketch/sketch.ts', 'Example solution')} and its {Link('https://github.com/JulesFouchy/p5_Rosace_Generator/blob/main/shader/myShader.frag', 'shader')}.
            <br/><br/>
            </li>
        </ul>
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
