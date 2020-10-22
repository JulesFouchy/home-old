import { h } from 'hyperapp'

export default (pageName: string, linkName?: string) =>
    h('a', {href: 'http://localhost:5000/' + pageName}, linkName || pageName)