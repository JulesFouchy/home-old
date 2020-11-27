import { h } from 'hyperapp'
import { PageRef } from '../types/PageRef'
import { PageGroup } from '../types/PageGroup'
import RemoveProtocolFromURL from '../helper/RemoveProtocolFromURL'

const Link = (url: string, child?: any) => {
    return h('a', {href: url}, child || RemoveProtocolFromURL(url))
}

const PageLink = (ref: PageRef, child?: any) => {
    return Link(ref.url, child || ref.name)
}

const GroupLink = (group: PageGroup) => {
    return Link(group.pages[0].url, group.name)
}

export { Link, PageLink, GroupLink }