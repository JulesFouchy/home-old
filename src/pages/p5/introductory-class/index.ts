import { Page } from '../../../types/Page'
import { h } from 'hyperapp'
import Toc from '../../../components/TableOfContents'
import toc from './toc'
import route from './route'

const state = {}

const view = () =>
    h('div', {}, 
    [
        h('p', {}, 'I love p5'),
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