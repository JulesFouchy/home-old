import { h } from "hyperapp"

// Thanks to https://gist.github.com/sergey-shpak/dffb81833fa060ec81d5830a9a039f82

function onClick(state) {
  this.hidden = !this.hidden
  return { ...state }
}

function Input(children){
  return [
    h(
      'button', 
      {
        onClick: onClick.bind(this),
      },
        this.hidden ? '#' : '>'
      ),
    h(
      'div',
      {
        class: this.hidden ? 'hidden' : ''
      },
        children
    )
  ]
}

export default () => Input.bind({
    hidden: true
})