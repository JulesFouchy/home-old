import { PageGroup } from '../../../types/PageGroup'

import chapter0 from './0-getting-started/ref'
import chapter1 from './1-setup-and-draw/ref'
import chapter2 from './2-first-drawing/ref'

const group: PageGroup = {
    name: 'Introduction to p5',
    pages: [
        chapter0,
        chapter1,
        chapter2,
    ]
}

export default group