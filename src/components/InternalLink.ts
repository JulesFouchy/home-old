import { h } from 'hyperapp'

export default (pageName: string, linkName?: string) =>
    h('a', {href: 'http://localhost:1234/' + pageName}, linkName || pageName)