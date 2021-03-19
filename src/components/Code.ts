import { h } from 'hyperapp'

export default (text: string) => h(
      'div',
      {class: 'highlight'},
      h(
            'span',
            {class: 'code code-block'},
            text
      )
)