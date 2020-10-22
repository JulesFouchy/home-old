import { Page } from '../types/Page'
import InternalLink from '../components/InternalLink'
import { app, h } from 'hyperapp'
// Import routes
import experimental from './Experimental'
import hexaRoute from './HexagonsTestPage'
import p5Tutorials from './p5Page'

const view = () =>
    h('div', {}, [
        h('p', {}, InternalLink(experimental)),
        h('p', {}, InternalLink(hexaRoute)),
        h('p', {}, InternalLink(p5Tutorials)),
    ])

const page: Page = {
    route: '',
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
export default route
export { page }