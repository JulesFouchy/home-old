import { h, app } from 'hyperapp'
import { PageLink, GroupLink } from '../../components/Link'
//
import group_p5Intro from '../p5/class/group'
import page_hexagons from '../hexagons/info'
import group_artworks from '../artworks/group'
import group_pedagogy from '../pedagogy/group'
import group_soutienMathsS1 from '../soutien-maths-s1/group'
import group_soutienMathsS2 from '../soutien-maths-s2/group'

const view = () =>
    h(
        'div', 
    {
        class: 'main-layout',
    }, 
    [
        'Hello Web',
        PageLink(page_hexagons.ref),
        GroupLink(group_p5Intro),
        GroupLink(group_artworks),
        GroupLink(group_pedagogy),
        GroupLink(group_soutienMathsS1),
        GroupLink(group_soutienMathsS2),
    ])

app({
    init: {},
    view: view,
    node: document.body,
})