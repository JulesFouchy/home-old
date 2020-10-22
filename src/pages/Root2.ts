import { Page } from '../types/Page'


import state from '../state'
import mainView from '../views/mainView'

import { app } from 'hyperapp'

const page: Page = {
    route: '',
    onEnter: () => {
        console.log("root2")
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