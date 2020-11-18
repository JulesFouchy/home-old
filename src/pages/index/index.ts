import { h, app } from 'hyperapp'
import Link from '../../components/Link'
import GroupLink from '../../components/GroupLink'
//
import group_p5Intro from '../p5/introductory-class/group'
import page_hexagons from '../hexagons/info'

const view = () =>
    h(
        'div', 
    {
        class: 'main-layout',
    }, 
    [
        'Hello Web',
        Link(page_hexagons.ref),
        GroupLink(group_p5Intro),
    ])

app({
    init: {},
    view: view,
    node: document.body,
})