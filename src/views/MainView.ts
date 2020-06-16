import { h } from 'hyperapp'

const Hexagon = () => 
    h('div', {class: 'hexaContainer'},
        h('div', {class: 'hexagon'}, [
            h('span', {class: 'outerHexagon'}),
            h('span', {class: 'innerHexagon'})
        ])
    )

export default state =>
    h('div', {}, [
        'Hello Web',
        h('div', {class: 'hexagons'}, [
            h('div', {class: 'hexaSet1'}, [
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
            ]),
            h('div', {class: 'hexaSet2'}, [
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
                Hexagon(),
            ])
        ])
    ])