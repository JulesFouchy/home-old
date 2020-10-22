import Navigo from 'navigo'
import { Page } from './types/Page'

import HexagonsPage from './pages/HexagonsTestPage'
import RootPage from './pages/RootPage'
import Root2 from './pages/Root2'

const pages = [
    RootPage,
    HexagonsPage,
    Root2,
]

const router = new Navigo()
pages.forEach(page => {
    router.on(page.route, page.onEnter)
})
router.resolve()