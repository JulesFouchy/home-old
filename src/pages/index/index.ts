import { h, app } from 'hyperapp'
import { PageLink, GroupLink } from '../../components/Link'
//
import group_p5Intro from '../p5/introduction/group'
import page_hexagons from '../hexagons/info'

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
    ])

app({
    init: {},
    view: view,
    node: document.body,
})