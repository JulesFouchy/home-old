import { h } from 'hyperapp'
import { Page } from '../types/Page'
import PageGroup from './PageGroup'

export default (page: Page) => {
    return (state: any) => h(
        'div', {},
        [
            h('a', {href: '/index.html'}, 'Home'),
            page.info.group && PageGroup(page.info.group),
            page.view(state),
        ]
    )
}