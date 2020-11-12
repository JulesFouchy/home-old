import { Page } from '../../../types/Page'
import { h } from 'hyperapp'
import Toc from '../../../components/TableOfContents'
import toc from './toc'
import indexRoute from './route'

const route = indexRoute + '/1-setup-and-draw'

const state = {}

const view = () =>
    h('div', {}, 
    [
        h('p', {}, '1 I love p5'),
        Toc(toc),
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