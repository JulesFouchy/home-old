import { h } from 'hyperapp'
import InternalLink from './InternalLink'

export default (routes: string[]) => {
    return h('div', {}, routes.map(route => InternalLink(route)))
}