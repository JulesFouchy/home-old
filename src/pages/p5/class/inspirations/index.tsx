import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import { Link } from '../../../../components/Link'

const view = () =>
<div>
    <h2>Algorithmic</h2>
        {Link("https://aiartists.org/generative-art-design", "Overview of Artworks and Styles")}
        <br/><br/>
        {Link("https://www.artnome.com/news/2018/8/8/why-love-generative-art", "More Artworks")}
    <h2>Maths</h2>
        {Link("https://www.youtube.com/watch?v=fDSIRXmnVvk", "Chaos Equations - Code Parade")}
        <br/><br/>
        {Link("https://www.youtube.com/watch?v=8--5LwHRhjk", "Modeling with SDFs - Inigo Quilez")}
        <br/><br/>
        {Link("https://www.openprocessing.org/sketch/1057083", "Interference Patterns")}
    <h2>Music</h2>
        {Link("https://www.youtube.com/watch?v=QGLPinGZhfg", "Sonic PI : the p5 of music")}
        <br/><br/>
        {Link("https://www.youtube.com/watch?v=G1m0aX9Lpts", "Sonic PI : Amazing live demo")}
        <br/><br/>
        {Link("https://www.youtube.com/watch?v=0lTZ8Tuyu5I", "Sonic PI : Explained by its creator")}
</div>

app({
    init: {},
    view: PageView({
        view: view,
        info,
    }),
    node: document.body,
})