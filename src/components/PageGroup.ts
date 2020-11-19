import { h } from 'hyperapp'
import { PageInfo } from '../types/PageInfo'
import TableOfContents from './TableOfContents'

export default (info: PageInfo) => {
    return info.group && h(
        'div',
    {
        class: 'page-group'
    },
    [
        info.group.name,
        TableOfContents(info.group.pages, info.ref.name),
    ]
    )
}