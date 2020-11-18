import { h, app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import Anecdote from '../../../../components/Anecdote'

const view = () =>
<div>
    I have an amazing template ready for you and I would highly recommend you to use it for all your p5 action.
    <br/>
    Everything is already explained in the <i>ReadMe</i>, so I'll see you soon when your are done setting it up, ready to discover ✨ p5.js ✨.
    <br/>
    <a href="https://github.com/JulesFouchy/p5Template">github.com/JulesFouchy/p5Template</a>
    {Anecdote([
        "Please note that I also have a template for using shaders inside p5 ; we might talk about this later.",
        h('br'),
        h('a', {href: 'https://github.com/JulesFouchy/p5ShaderTemplate'}, 'github.com/JulesFouchy/p5ShaderTemplate')
    ])}
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
