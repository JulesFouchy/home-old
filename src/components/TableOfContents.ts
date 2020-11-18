import { h } from 'hyperapp'
import { PageRef } from '../types/PageRef'
import Link from './Link'

export default (pages: PageRef[]) => {
    return h(
        'div', 
    {
        class: 'table-of-contents'
    },
    pages.map(page => 
        h('a',
        {
            href: page.url,   
        },
        [
            h('div',
            {
                class: 'toc-element'
            },[
                page.name || page.url
            ])
        ])
    )
    )
}