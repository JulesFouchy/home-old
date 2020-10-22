
export interface Page {
    route: string,
    state?: any,
    view: (state?: any) => void,
}