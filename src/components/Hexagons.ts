import { h } from 'hyperapp'

const Hexagon = () => 
    h('div', {class: 'hexaContainer'},
        h('div', {class: 'hexagon'}, [
            h('span', {class: 'outerHexagon'}),
            h('span', {class: 'innerHexagon'})
        ])
    )

const PairOfHexagons = () => 
    h('div', {class: 'pairOfHexagons'}, [
        Hexagon(),
        Hexagon(),
    ])

const FakePairOfHexagons = () => 
h('div', {class: 'pairOfHexagons'}, [
    Hexagon(),
])

export default (N: number) => {
    const pairs = Array.from(Array(Math.floor(N/2)), (_, i) => PairOfHexagons())
    if (N % 2 === 1)
        pairs.push(FakePairOfHexagons())
    return h('div', {class: 'hexagons'}, pairs)
}