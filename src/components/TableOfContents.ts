import { h } from 'hyperapp'
import { PageRef } from '../types/PageRef'
import { PageLink } from './Link'

export default (pages: PageRef[], currPageName: string) => {
    return h(
        'div', 
    {
        class: 'table-of-contents'
    },
        pages.map(page => 
            PageLink(page, 
            [
                h('div',
                {
                    class: 'toc-element' + (currPageName === page.name ? ' selected' : '')
                },[
                    page.name || page.url
                ])
            ])
        )
)}