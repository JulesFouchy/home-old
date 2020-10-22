import { Page } from '../types/Page'
import { h } from 'hyperapp'

const route = 'p5'

const state = {}

const view = () =>
    h('p', {}, 'I love p5')


// -------------
// -- Exports --
const page: Page = {
    route,
    state,
    view,
}
export default route
export { page }