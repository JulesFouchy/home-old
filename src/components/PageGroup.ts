import { h } from 'hyperapp'
import { PageGroup } from '../types/PageGroup'
import TableOfContents from './TableOfContents'

export default (group: PageGroup) => {
    return h(
        'div',
    {
        class: 'page-group'
    },
    [
        group.name,
        TableOfContents(group.pages),
    ]
    )
}