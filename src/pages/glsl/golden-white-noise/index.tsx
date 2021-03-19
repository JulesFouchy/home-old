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
<br/><br/>
{Code(`float random(vec2 uv){
    return fract(sin(dot(uv ,vec2(12.9898,78.233))) * 43758.5453);
}
`)}
<br/>
And I used it too, until someone pointed out a big problem to me : on her device my artworks were all messed up ! And it turned
out that many people were actually encountering the same problem. (You can see the artifacts in the comparison at the end)
<br/><br/>
After a bit of investigation I tracked it down to the {InlineCode("random")} function that was not producing reliable results !
It turned out that, depending on the precision of floats supported by your GPU, the results were different. For low precision floats the quality of the distribution gets noticeably degraded.
<br/><br/>
And at this moment I remembered that guy at the bottom of the StackOverflow discussion claiming that his {InlineCode("Gold Noise")} was much better.
And guess what, he was right ! So thank you Dominic Cerisano for this lovely piece of code.
<br/><br/>
{Code(`// Gold Noise ©2015 dcerisano@standard3d.com
// - based on the Golden Ratio
// - uniform normalized distribution
// - fastest static noise generator function (also runs at low precision)

float PHI = 1.61803398874989484820459;  // Φ = Golden Ratio   

float gold_noise(in vec2 xy, in float seed){
    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}
`)}
<br/>
The corresponding StackOverflow discussion : {Link("https://stackoverflow.com/questions/4200224/random-noise-functions-for-glsl")}
<br/><br/>
A live comparison of the different types of white noise : {Link("https://www.shadertoy.com/view/fsf3DN")}
<br/><br/>

And here is a comparison of the visual results. Gold Noise produces the same (artifact-free) results on all the GPUs I could test with :
<div class="grid-container">
  <div class="grid-item"></div>
  <div class="grid-item">Classic white noise</div>
  <div class="grid-item">Gold Noise</div>
  <div class="grid-item">Potato GPU</div>
  <div class="grid-item"><img src={classic_potato}></img></div>
  <div class="grid-item"><img src={golden_potato}></img></div>
  <div class="grid-item">Good GPU</div>
  <div class="grid-item"><img src={classic_good}></img></div>
  <div class="grid-item"><img src={golden_good}></img></div>
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
