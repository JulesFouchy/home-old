import { h } from 'hyperapp'
import { Page } from '../types/Page'
import PageGroup from './PageGroup'
import { PageLink } from './Link'
import IndexRef from '../pages/index/ref'
import NextPageInGroup from './NextPageInGroup'

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
                h(
                    'span',
                    {
                        class: 'non-scrolable'
                    },
                    [
                        PageLink(IndexRef),
                        PageGroup(page.info),
                    ]
                )
            ),
            h(
                'div',
            {
                class: 'column-2'
            },
            [
                page.view(state),
                NextPageInGroup(page.info),
            ]
            ),
        ]
    )
}