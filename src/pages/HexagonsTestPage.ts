import { Page } from '../types/Page'

import state from '../state'
import mainView from '../views/mainView'

import { app } from 'hyperapp'

const page: Page = {
    route: 'experimental/hexagons',
    onEnter: () => {
        console.log("hexa")
        app(
            { 
                init: state,
                view: mainView,
                node: document.body,
            }
        )
    }
}

const route = page.route
export default page
export { route }