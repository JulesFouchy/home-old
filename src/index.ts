import Navigo from 'navigo'
import { app } from 'hyperapp'
// Pages
import { page as Root } from './pages/Root'
import { page as Experimental } from './pages/Experimental'
import { page as Hexagons } from './pages/Hexagons'
import { page as p5 } from './pages/p5'

const pages = [
    p5,
    Experimental,
    Hexagons,
    Root, // Must be declared last, otherwise all routes fall back to this one
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