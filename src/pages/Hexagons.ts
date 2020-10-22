import { Page } from '../types/Page'
import { h } from 'hyperapp'
import InternalLink from '../components/InternalLink'
// Links
import Hexagons from '../components/Hexagons'
import rootRoute from './Root'
//

const route = 'experimental/hexagons'

interface State {
    nbHexas: number,
}

const state: State = {
    nbHexas: 10,
}

const view = (state) =>
    h('div', {}, [
        'Hello Web',
        h('button', {
            onclick: (state: State) => ({
                ...state,
                nbHexas: state.nbHexas - 1,
            })
        }, '-'),
        h('button', {
            onclick: (state: State) => ({
                ...state,
                nbHexas: state.nbHexas + 1,
            })
        }, '+'),
        Hexagons(state.nbHexas, 'jules'),
        InternalLink(rootRoute, 'Retour à la maison')
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