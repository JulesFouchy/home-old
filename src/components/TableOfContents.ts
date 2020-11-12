import { h } from 'hyperapp'
import InternalLink from './InternalLink'

export default (routes: string[]) => {
    return h(
        'div', 
    {
        class: 'table-of-contents'
    },
        routes.map(route => InternalLink(route)))
}