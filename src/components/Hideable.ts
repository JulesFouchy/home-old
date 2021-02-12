

 import { app, h } from "hyperapp"
const Stateful = (Component, state?) => 
 Component.bind(state || Component.state)

function onFocus(state){
  this.focused = true
  return { ...state }
}

function onBlur(state){
  this.focused = false
  return { ...state }
}

function Input(children){
  return [
    h('input', {
      onFocus: onFocus.bind(this),
      onBlur: onBlur.bind(this)
    }),
    h('div', {}, `Focused ${this.focused}`),
    h('div',
    {
      class: this.focused ? 'hidden' : ''
    },
      children
    )
  ]
}

// Exposing initial component state
Input.state = { focused: false }

// --- USAGE EXAMPLE --- 


// export default (children) => {
//   const InputBox1 = Stateful(Input)
//   return h(InputBox1, children)
// }

export default () => Stateful(Input, {
    focused: false
})