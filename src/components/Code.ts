import { h } from 'hyperapp'

export default (text: string) => h('span', {class: 'code'}, text)