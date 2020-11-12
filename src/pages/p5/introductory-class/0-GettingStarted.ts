import { Page } from '../../../types/Page'
import { h } from 'hyperapp'
import Toc from '../../../components/TableOfContents'
import toc from './toc'
import indexRoute from './route'

const route = indexRoute + '/0-getting-started'

const state = {}

const view = () =>
    h('div', {}, 
    [
        h('p', {}, '0 I love p5'),
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