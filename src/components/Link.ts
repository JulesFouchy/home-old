import { h } from 'hyperapp'
import { PageRef } from '../types/PageRef'
import { PageGroup } from '../types/PageGroup'

const Link = (url: String, child?: any) => {
    return h('a', {href: url}, child || url)
}

const PageLink = (ref: PageRef, child?: any) => {
    return Link(ref.url, child || ref.name)
}

const GroupLink = (group: PageGroup) => {
    return Link(group.pages[0].url, group.name)
}

export { Link, PageLink, GroupLink }