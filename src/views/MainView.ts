import { h } from 'hyperapp'
import Hexagons from '../components/Hexagons'

export default state =>
    h('div', {}, [
        'Hello Web',
        Hexagons(11)
    ])