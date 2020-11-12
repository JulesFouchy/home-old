import { h } from 'hyperapp'
import Link from './Link'

export default (routes: string[]) => {
    return h(
        'div', 
    {
        class: 'table-of-contents'
    },
        routes.map(route => Link(route)))
}