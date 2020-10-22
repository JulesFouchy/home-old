import { Page } from '../types/Page'


import state from '../state'
import mainView from '../views/mainView'
import InternalLink from '../components/InternalLink'
import { route as hexaRoute } from './HexagonsTestPage'

import { app, h } from 'hyperapp'

const page: Page = {
    route: 'experimental',
    onEnter: () => {
        app(
            { 
                init: state,
                view: () => h('div', {}, [
                    h('p', {}, 'CECI ES un TeST'),
                    InternalLink(hexaRoute),
                ]),
                node: document.body,
            }
        )
    }
}

const route = page.route
export default page
export { route }