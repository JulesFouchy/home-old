import Navigo from 'navigo'

import RootPage from './pages/RootPage'
import HexagonsPage from './pages/HexagonsTestPage'
import Experimental from './pages/Experimental'
import p5 from './pages/p5Page'

const pages = [
    p5,
    Experimental,
    HexagonsPage,
    RootPage, // Must be declared last, otherwise all routes fall back to this one
]

const router = new Navigo()
pages.forEach(page => {
    router.on(page.route, page.onEnter)
})
router.resolve()