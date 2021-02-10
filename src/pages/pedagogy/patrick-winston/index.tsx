import info from './info'
import VideoWithAnnotations from '../../../components/VideoWithAnnotations'
import { h } from 'hyperapp'

VideoWithAnnotations(
    info,
    "Unzc731iCUY", 
    [
        {
            timeStamp: 264,
            comment: [h('b', {}, "Don't start with a joke"), h('span', {}, `, people are not ready and focused yet. Start with an "Empowerment Promise"
            about what they will learn during the talk.`)]
        },
        {
            timeStamp: 348,
            comment: [h('b', {}, "Cycle"), h('span', {}, " : repeat what you want to say 3 times.")]
        },
        {
            timeStamp: 393,
            comment: [h('b', {}, "Build a fence"), h('span', {}, " : explicit what your idea is not, why it differs from similar ideas.")]
        },
    ]
)