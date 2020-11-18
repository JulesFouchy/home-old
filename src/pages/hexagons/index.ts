import { h, app } from 'hyperapp'
import Hexagons from './Hexagons'
import PageView from '../../components/PageView'
import info from './info'

interface State {
    nbHexas: number,
}

const state: State = {
    nbHexas: 10,
}

const view = (state: State) =>
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
    ])

app({
    init: state,
    view: PageView({
        view,
        info,
    }),
    node: document.body,
})