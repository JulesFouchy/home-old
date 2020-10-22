import { h } from 'hyperapp'

export default (pageName: string, linkName?: string) =>
    h('a', {href: process.env.ROOT_URL + pageName}, linkName || pageName)