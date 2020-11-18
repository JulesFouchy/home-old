
// A PageRef is everything about the page, except its group because of circular inclusion problems (a group is an array of PageRefs)
export interface PageRef {
    url: string,
    name: string,
}