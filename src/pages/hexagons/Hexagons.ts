import { h } from 'hyperapp'

const Hexagon = (i, id) => 
    h('div', {class: 'hexaContainer'},
        h('div', {class: 'hexagon', id: id+i}, [
            h('span', {class: 'outerHexagon'}),
            h('span', {class: 'innerHexagon'})
        ])
    )

const PairOfHexagons = (i, id) => 
    h('div', {class: 'pairOfHexagons'}, [
        Hexagon(2*i,   id),
        Hexagon(2*i+1, id),
    ])

const FakePairOfHexagons = (i, id) => 
h('div', {class: 'pairOfHexagons'}, [
    Hexagon(i, id),
])

export default (N: number, id: String = '') => {
    const pairs = Array.from(Array(Math.floor(N/2)), (_, i) => PairOfHexagons(i, id))
    if (N % 2 === 1)
        pairs.push(FakePairOfHexagons(N-1, id))
    return h('div', {class: 'hexagons'}, pairs)
}