import { Page } from '../types/Page'
import InternalLink from '../components/InternalLink'
import { app, h } from 'hyperapp'
// Import routes
import { route as experimental } from './Experimental'
import { route as hexaRoute } from './HexagonsTestPage'
import { route as p5Tutorials } from './p5Page'

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
export default page
export { route }