import { Page } from '../types/Page'
import { h } from 'hyperapp'
import InternalLink from '../components/InternalLink'
// Links
import experimental from './Experimental'
import hexaRoute from './HexagonsTestPage'
import p5Tutorials from './p5Page'
//

const route = ''

const state = {}

const view = () =>
    h('div', {}, [
        h('p', {}, InternalLink(experimental)),
        h('p', {}, InternalLink(hexaRoute)),
        h('p', {}, InternalLink(p5Tutorials)),
    ])


// -------------
// -- Exports --
const page: Page = {
    route,
    state,
    view,
}
export default route
export { page }