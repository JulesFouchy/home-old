import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import Anecdote from '../../../../components/Anecdote'
import { Link } from '../../../../components/Link'

const view = () =>
<div>
    <h2>THE p5 template</h2>
        I have an amazing template ready for you and I would highly recommend you use it for all your p5 action.
        <br/>
        Everything is already explained in the <i>ReadMe</i>, so I'll see you soon when your are done setting it up, ready to discover ✨ p5.js ✨.
        <br/>
        {Link('https://github.com/JulesFouchy/p5Template')}
        {Anecdote([
            "Please note that I also have a template for using shaders inside p5 ; we might talk about this later.",
            h('br'),
            Link('https://github.com/JulesFouchy/p5ShaderTemplate'),
        ])}
    <h2>Documentation</h2>
        p5 has a wonderfull website with tons of examples and a really nice documentation ; check it out whenever you are
        looking for something ! {Link('https://p5js.org/reference')}
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
