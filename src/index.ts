import Navigo from 'navigo'
import { Page } from './types/Page'

import HexagonsPage from './pages/HexagonsTestPage'
import RootPage from './pages/RootPage'
import Experimental from './pages/Experimental'

const pages = [
    Experimental,
    HexagonsPage,
    RootPage, // Must be declared last, otherwise all routes fall back to this one
]

console.log(Experimental)

const router = new Navigo()
pages.forEach(page => {
    router.on(page.route, page.onEnter)
})
router.resolve()