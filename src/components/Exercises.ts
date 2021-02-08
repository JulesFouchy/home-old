import { h } from 'hyperapp'

export default (exercises: string[]) => {
    return h(
        'div',
        {class: 'exercises'},
        [
            h('i', {}, "Exercises"),
            h('ul',
                {},
                exercises.map(exercise => h('div', {}, [
                    h(
                        'li',
                        {},
                        exercise
                    ),
                    h(
                        'br',
                        {},
                    ),
                ]))
            )
        ]
    )
}