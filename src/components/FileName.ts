import { h } from 'hyperapp'

export default (name: string) => h('span', {class: 'filename'}, name)