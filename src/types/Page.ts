import { PageRef } from './PageRef'

export interface Page {
    view: any,
    toc?: PageRef[]
}