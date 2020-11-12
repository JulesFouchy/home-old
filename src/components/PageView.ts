import { h } from 'hyperapp'
import { Page } from '../types/Page'
import TOC from './TableOfContents'

export default (page: Page) => {
    return (state: any) => h(
        'div', {},
        [
            h('a', {href: '/index.html'}, 'Home'),
            page.toc && TOC(page.toc),
            page.view(state),
        ]
    )
}