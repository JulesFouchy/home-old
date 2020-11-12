import Navigo from 'navigo'
import { app } from 'hyperapp'
// Pages
import { page as Root } from './pages/Root'
import { page as Experimental } from './pages/Experimental'
import { page as Hexagons } from './pages/Hexagons'
import { page as p5Intro } from './pages/p5/introductory-class/index'
import { page as p5Intro0 } from './pages/p5/introductory-class/0-GettingStarted'
import { page as p5Intro1 } from './pages/p5/introductory-class/1-SetupAndDraw'

const pages = [
    p5Intro,
    p5Intro0,
    p5Intro1,
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