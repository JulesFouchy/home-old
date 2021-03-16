import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import { Link } from '../../../components/Link'
import InlineCode from '../../../components/InlineCode'
import Code from '../../../components/Code'
import golden_potato  from './img/golden_potato.png'
import golden_good    from './img/golden_good.png'
import classic_potato from './img/classic_potato.png'
import classic_good   from './img/classic_good.png'

const view = () => 
<div>
Every person interested in rendering through fragment shaders has already come across a function like this to generate some white noise :
<br/>
{Code(`
float random(vec2 uv){
    return fract(sin(dot(uv.xy ,vec2(12.9898,78.233))) * 43758.5453);
}
`)}

And I used it too, until someone pointed out a big problem to me : on her device, my artworks were all messed up ! And it turned
out that many people were actually encountering that problem.
<br/>
After a bit of investigation, I tracked it down to the {InlineCode("rand")} function that was not producing relyable results !
It turned that, depending on the precision of floats supported by your GPU, the results were different, and they were poorly distributed for low precision floats.
<br/>
And at that moment I remembered that guy at the bottom of the StackOverflow discussion claiming that his {InlineCode("Gold Noise")}
was much better. And guess what, he was right ! So thank you Dominic Cerisano for this lovely piece of code.
<br/>
{Code(`
// Gold Noise ©2015 dcerisano@standard3d.com
// - based on the Golden Ratio
// - uniform normalized distribution
// - fastest static noise generator function (also runs at low precision)

float PHI = 1.61803398874989484820459;  // Φ = Golden Ratio   

float gold_noise(in vec2 xy, in float seed){
       return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}
`)}
<br/>
The StackOverflow discussion : {Link("https://stackoverflow.com/questions/4200224/random-noise-functions-for-glsl")}
<br/><br/>
A live demo of the different types of white noise in action : {Link("https://www.shadertoy.com/view/fsf3DN")}
<br/><br/>

And here is a comparison of the visual results. Gold noise produces the same (artifact-free) results on all the GPUs I could test with.
<img src={golden_potato}></img>
<img src={golden_good}></img>
<img src={classic_potato}></img>
<img src={classic_good}></img>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
