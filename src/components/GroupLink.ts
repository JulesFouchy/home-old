import { h } from 'hyperapp'
import { PageGroup } from '../types/PageGroup'

export default (group: PageGroup) => {
    return h('a',
    {
        href: group.pages[0].url
    },
        group.name
    )
}