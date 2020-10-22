import { Page } from '../types/Page'
import { h } from 'hyperapp'
import InternalLink from '../components/InternalLink'
// Links
import hexaRoute from './Hexagons'
//

const route = 'experimental'

const state = {}

const view = () =>
    h('div', {}, [
        InternalLink(hexaRoute),
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