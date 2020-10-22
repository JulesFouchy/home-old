import { h } from 'hyperapp'

export default (pageName: string, linkName?: string) => {
    const ROOT_URL = process.env.DEBUG ? 'http://localhost:1234/' : 'https://julesfouchy.herokuapp.com/'
    return h('a', {href: ROOT_URL + pageName}, linkName || pageName)
}