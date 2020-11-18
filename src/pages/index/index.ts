import { h, app } from 'hyperapp'
import Link from '../../components/Link'
import GroupLink from '../../components/GroupLink'
//
import group_p5Intro from '../p5/introductory-class/group'

const view = () =>
    h(
        'div', 
    {
        class: 'main-layout',
    }, 
    [
        'Hello Web',
        Link('hexagons.html'),
        GroupLink(group_p5Intro),
    ])

app({
    init: {},
    view: view,
    node: document.body,
})