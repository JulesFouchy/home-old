import { PageGroup } from '../../types/PageGroup'

import page0 from './fiche-recap/ref'
import page1 from './1-espaces-vectoriels/ref'
import page2 from './2-dimension/ref'
import page3 from './3-matrices/ref'
import page4 from './4-determinant/ref'
import page5 from './5-diagonalisation/ref'

const group: PageGroup = {
    name: 'Soutien Maths S2 : Algèbre Linéaire',
    pages: [
        page0,
        page1,
        page2,
        page3,
        page4,
        page5,
    ]
}

export default group