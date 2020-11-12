import { Page } from '../../../types/Page'
import { h } from 'hyperapp'
import indexRoute from './route'

const route = indexRoute + '/1-setup-and-draw'

const state = {}

const view = () =>
    h('p', {}, '1 I love p5')


// -------------
// -- Exports --
const page: Page = {
    route,
    state,
    view,
}
export default route
export { page }