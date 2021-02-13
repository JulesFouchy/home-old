import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../../components/PageView'
import { Link } from '../../../../components/Link'

const view = () =>
<div>
    <h2><b>The</b> p5 template</h2>
        I have an amazing template ready for you and I would highly recommend you use it for all your p5 action.
        <br/><br/>
        <div class="highlight">
            Download the template and check the <i>ReadMe</i> to install everything !
            <br/>
            {Link('https://github.com/JulesFouchy/p5Template')}
        </div>
        <br/>
        <div class="highlight">
            Please note that I also have a template for using shaders inside p5 ; we might talk about this later.
            <br/>
            {Link('https://github.com/JulesFouchy/p5ShaderTemplate')}
        </div>
    <h2>Documentation</h2>
        p5 has a wonderful website with tons of examples and a really nice documentation ; check it out whenever you are
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
