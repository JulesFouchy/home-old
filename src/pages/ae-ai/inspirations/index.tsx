import { app } from 'hyperapp'
import info from './info'
import PageView from '../../../components/PageView'
import { Link } from '../../../components/Link'

const view = () => 
<div>
    {/* {Link('https://fb.watch/3HTNcbR2PS/', 'GAN : Growing mountain')} */}
    {Link('https://magenta.tensorflow.org/get-started', 'Magenta')} : js library for music and image with AI <br/>
    {Link('https://ml5js.org/', 'ml5')} : js library for image with AI <br/>
    {Link('https://runwayml.com/', 'Runway')} : interface and js library for image with AI <br/>
    {Link('https://www.artbreeder.com/browse', 'Art Breeder')} : interface to generate images with AI<br/>
</div>

app({
    init: {},
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})
