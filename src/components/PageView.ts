import { h } from 'hyperapp'
import { Page } from '../types/Page'
import PageGroup from './PageGroup'
import Link from './Link'
import IndexRef from '../pages/index/ref'

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
                Link(IndexRef),
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