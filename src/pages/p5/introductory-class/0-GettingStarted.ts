import { Page } from '../../../types/Page'
import { h } from 'hyperapp'
import indexRoute from './route'

const route = indexRoute + '/0-getting-started'

const state = {}

const view = () =>
    h('p', {}, '0 I love p5')


// -------------
// -- Exports --
const page: Page = {
    route,
    state,
    view,
}
export default route
export { page }