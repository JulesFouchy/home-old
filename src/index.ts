import Navigo from 'navigo'
import { app } from 'hyperapp'

import { page as RootPage } from './pages/RootPage'
import { page as Experimental } from './pages/Experimental'
import { page as HexagonsPage } from './pages/HexagonsTestPage'
import { page as p5 } from './pages/p5Page'

const pages = [
    p5,
    Experimental,
    HexagonsPage,
    RootPage, // Must be declared last, otherwise all routes fall back to this one
]

const router = new Navigo()
pages.forEach(page => {
    router.on(page.route, () => {
        app({
            init: page.state,
            view: page.view,
            node: document.body,
        })
    })
})
router.resolve()