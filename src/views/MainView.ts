import { h } from 'hyperapp'
import type { State } from '../state'
import Hexagons from '../components/Hexagons'
import InternalLink from '../components/InternalLink'
import { route as rootRoute } from '../pages/RootPage'

export default (state: State) =>
    h('div', {}, [
        'Hello Web',
        h('button', {
            onclick: (state: State) => ({
                ...state,
                nbHexas: state.nbHexas + 1,
            })
        }, '+'),
        h('button', {
            onclick: (state: State) => ({
                ...state,
                nbHexas: state.nbHexas - 1,
            })
        }, '-'),
        Hexagons(state.nbHexas, 'jules'),
        InternalLink(rootRoute, 'Retour à la maison')
    ])