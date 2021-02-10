import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import InlineCode from '../../../../components/InlineCode'
import LineJump from '../../../../components/LineJump'
import p5Code from '../../../../components/p5Code'
import { Link } from '../../../../components/Link'

const view = () => 
<div>
    <div className="highlight">
        Make a chessboard pattern.
    </div>
    Help #1 : Split the problem in small steps
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
    <br/>
    Bonus constraints :
    <ul>
        <li>Can you generalize to any number of grid cells ?</li>
        <li>Can you do it in less than 10 lines of code ? Less than 5 ?</li>
        <ul>
            <li>Avoid accumulative variables (compute everything based on the current loop indices instead of having global variables that change from one loop iteration to the next)</li>
            <li>Use one loop instead of two</li>
        </ul>
        <li>Can you think of another tiling pattern ? Using three colors instead of two for example.</li>
    </ul>
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
const N = 10
for (let k = 0; k < N*N; ++k) {
    fill((k + (N % 2 ? 0 : floor(k/N) % 2)) % 2 ? "black" : "white")
    rect((k%N) * width / N, floor(k/N) * height / N, width/N, height/N)
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
