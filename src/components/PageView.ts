import { h } from 'hyperapp'
import { Page } from '../types/Page'
import PageGroup from './PageGroup'

export default (page: Page) => {
    return (state: any) => h(
            'div', 
        {
            class: 'page-layout'
        },
        [
            h(
                'div',
            {
                class: 'column-1'
            },
            [
                h('a', {href: '/index.html'}, 'Home'),
                page.info.group && PageGroup(page.info.group),
            ]
            ),
            h(
                'div',
            {
                class: 'column-2'
            },
            [
                page.view(state),
            ]
            ),
        ]
    )
}