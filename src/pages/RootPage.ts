import { Page } from '../types/Page'


import state from '../state'
import mainView from '../views/mainView'

import { app } from 'hyperapp'
import InternalLink from '../components/InternalLink'
import { route as hexaRoute } from './HexagonsTestPage'

const page: Page = {
    route: 'go',
    onEnter: () => {
        console.log("root")
        app(
            { 
                init: state,
                view: () => InternalLink(hexaRoute),
                node: document.body,
            }
        )
    }
}

const route = page.route
export default page
export { route }