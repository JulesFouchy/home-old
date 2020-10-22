import { Page } from '../types/Page'
import { app, h } from 'hyperapp'
import InternalLink from '../components/InternalLink'
import Hexagons from '../components/Hexagons'
import rootRoute from '../pages/RootPage'

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

const page: Page = {
    route: 'experimental/hexagons',
    onEnter: () => {
        app(
            { 
                init: state,
                view: view,
                node: document.body,
            }
        )
    }
}
// Exports
const route = page.route
export default route
export { page }