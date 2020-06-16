import { h } from 'hyperapp'

const Hexagon = () => 
    h('div', {},
        // h('div', {class: 'hexaContainer'},
            h('div', {class: 'hexagon'},
                h('span', {class: 'inner'})
            )
        // )
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