import { h } from 'hyperapp'

export default (pageName: string, linkName?: string) => {
    return h('a', {href: pageName}, linkName || pageName)
}