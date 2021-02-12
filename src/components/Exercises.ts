import { h } from 'hyperapp'
import { Link } from './Link'

interface exProps {
    title: string,
    demoLink?: string,
    codeLink?: string,
}

export default (exercises: exProps[]) => {
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
                        [
                            exercise.title,
                            h('div', {class: 'indent'}, [
                                exercise.demoLink && Link(exercise.demoLink, 'Example result'),
                                h('br'),
                                exercise.codeLink && Link(exercise.codeLink, 'Solution'),
                            ])
                        ]
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