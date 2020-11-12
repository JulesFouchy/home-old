import { h } from 'hyperapp'

export default (pageName: string, child?: any) => {
    return h('a', {href: pageName}, child || pageName)
}