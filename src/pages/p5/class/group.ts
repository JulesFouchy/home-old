import { PageGroup } from '../../../types/PageGroup'

import chapter0 from './getting-started/ref'
import chapter1 from './setup-and-draw/ref'
import chapter2 from './first-drawing/ref'
import chapter3 from './inspirations/ref'

const group: PageGroup = {
    name: 'Introduction to p5',
    pages: [
        chapter0,
        chapter1,
        chapter2,
        chapter3,
    ]
}

export default group