// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import state from './state'
import mainView from './views/mainView'

import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

// const tryFind = (identifier) => {
//     const search = window.location.search
//     const opt = identifier+'='
//     let begin = search.indexOf(opt)
//     if (begin !== -1) begin += opt.length
//     const end = search.indexOf('&')
//     return begin === - 1 ? ''
//                     : end === - 1 ? search.substring(begin)
//                       : search.substring(begin, end)
// }

// const cardID = tryFind('cardid')
// const authorID = tryFind('authorid')

// window.history.pushState(partsOfStateToSaveInHistory(state), '')

app(
    { 
        init: state,
        view: mainView,
        node: document.body,
        middleware: process.env.DEBUG==='true' && logger,
    }
)