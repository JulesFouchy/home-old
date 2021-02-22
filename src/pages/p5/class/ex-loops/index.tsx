import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import { Link } from '../../../../components/Link'

const view = () => 
<div>
    <div className="highlight">
        Draw 100 rectangles. Lay them out as you want.
    </div>
    <br/>
    <div className="indent">
        {Link('https://p5-class-jf.github.io/100-rectangles-v1/', 'Example result')}
        <br/>
        {Link('https://github.com/p5-class-jf/100-rectangles-v1/blob/main/src/sketch.ts', 'Example solution')}
        <br/><br/>
        Bonus constraints :
        <ul>
            <li>Play with the alpha value (transparency) or with the {Link('https://p5js.org/reference/#/p5/blendMode', 'Blend Mode')} to make it more interesting when rectangles overlap.
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
        Draw 100 ellipses. Try to have more of them near the center of the canvas.
    </div>
    <br/>
    <div className="indent">
        {Link('https://p5-class-jf.github.io/100-ellipses/', 'Example result')}
        <br/>
        {Link('https://github.com/p5-class-jf/100-ellipses/blob/main/src/sketch.ts', 'Example solution')}
        <br/><br/>
        Bonus constraints :
        <ul>
            <li>Find several ways of having them concentrated near the center. I can think of at least 3 different ways of achieving this result.</li>
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

<div className="highlight">
    Make a chessboard pattern.
</div>
<br/>
<div className="indent">
    {Link('https://p5-class-jf.github.io/chessboard/', 'Example result')}
    <br/>
    {Link('https://www.openprocessing.org/sketch/1107037', 'Step-by-step help and solution')}
    <br/><br/>
    Bonus constraints :
    <ul>
        <li>Can you generalize to any number of grid cells ?</li>
        <li>Can you think of another tiling pattern ? Using three colors instead of two for example.</li>
        <li>Can you do it in less than 10 lines of code ? Less than 5 ?</li>
        <ul>
            <li>Avoid accumulative variables (compute everything based on the current loop indices instead of having global variables that change from one loop iteration to the next)</li>
            <li>Use one loop instead of two</li>
            {Link('https://github.com/p5-class-jf/chessboard-10-lines/blob/main/src/sketch.ts', 'Solution in 10 lines')}
            <br/>
            {Link('https://github.com/p5-class-jf/chessboard-5-lines/blob/main/src/sketch.ts', 'Solution in 5 lines')}
        </ul>
    </ul>
    <br />
</div>

<div className="highlight">
    Draw a circle, but do it by placing each vertex "by hand" using the concept of {Link('https://p5js.org/reference/#/p5/beginShape', 'shape')}.
</div>
<br/>
<div className="indent">
    {Link('https://p5-class-jf.github.io/distorted-circle/', 'Example result')}
    <br/>
    {Link('https://github.com/p5-class-jf/distorted-circle/blob/main/src/sketch.ts', 'Example solution')}
    <br/><br/>
    Bonus constraints :
    <ul>
        <li>Now that you drew the circle yourself, you have more control and you can alter it !</li>
        <ul>
            <li>Add a small random offset to each vertex to create a distorted circle</li>
            <li>Add an offset based on the angle of the current vertex to make continuous effects</li>
        </ul>
    </ul>
    <br />
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
