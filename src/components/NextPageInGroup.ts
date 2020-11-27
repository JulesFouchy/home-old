import { h } from 'hyperapp'
import { PageInfo } from '../types/PageInfo'
import { PageRef } from '../types/PageRef'
import { PageLink } from './Link'

export default (info: PageInfo) => {
    if (info.group) {
        let nextPage:PageRef
        info.group.pages.forEach((ref, i) => {
            if (ref.name === info.ref.name) {
                nextPage = info.group.pages[i+1]
            }
        })
        return nextPage && h(
            'div',
            {
                class: 'next-page-in-group'
            },
            [
                'Next : ',
                PageLink(nextPage)
            ]
        )
    }
}