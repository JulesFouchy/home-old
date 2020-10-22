import { Page } from '../types/Page'
import InternalLink from '../components/InternalLink'
import { app, h } from 'hyperapp'
// Import routes
import { route as hexaRoute } from './HexagonsTestPage'

const view = () =>
    h('div', {}, [
        InternalLink(hexaRoute),
    ])

const page: Page = {
    route: 'experimental',
    onEnter: () => {
        app(
            { 
                init: {},
                view: view,
                node: document.body,
            }
        )
    }
}

// Exports
const route = page.route
export default page
export { route }