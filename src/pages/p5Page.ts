import { Page } from '../types/Page'
import InternalLink from '../components/InternalLink'
import { app, h } from 'hyperapp'

const view = () =>
    h('p', {}, 'I love p5')

const page: Page = {
    route: 'p5',
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