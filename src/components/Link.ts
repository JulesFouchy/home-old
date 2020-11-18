import { h } from 'hyperapp'
import { PageRef } from '../types/PageRef'

export default (ref: PageRef, child?: any) => {
    return h('a', {href: ref.url}, child || ref.name)
}