import { h, app } from 'hyperapp'
import type { PageInfo } from '../types/PageInfo'
import PageView from './PageView'

interface Annotation {
    timeStamp: number,
    comment: any,
}
  
const setVideoTimeStamp = (timeStamp: number) => (state) => ({
    ...state,
    timeStamp: timeStamp,
    autoplay: true,
    myjfforcerefresh: state.myjfforcerefresh + 1, // without this there is no apparent change if we click twice on the same link and therefore the page is not re-rendered
})

export default (info: PageInfo, youtubeVideoID: string, annotations: Annotation[]) => {
    const state = {
        timeStamp: 0,
        autoplay: false,
        myjfforcerefresh: 0,
    }

    const view = (state) => h(
        "div",
        {},
        [
            h(
                "iframe",
                {
                    width: "900",
                    height: "506",
                    src: `https://www.youtube.com/embed/${youtubeVideoID}?start=${state.timeStamp}&autoplay=${state.autoplay ? 1 : 0}&myjfforcerefresh=${state.myjfforcerefresh}`,
                    frameborder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowfullscreen: ""
                }
            ),
            h(
                "ul",
                {},
                annotations.map(annotation =>
                    h(
                        "li",
                        {},
                        [
                            h(
                                "span",
                                {
                                    onclick: setVideoTimeStamp(annotation.timeStamp),
                                    class: "clickable",
                                },
                                "Go To"
                            ),
                            " ",
                            annotation.comment,
                        ]
                    )
                )
            )
        ]
    )
    
    app({
        init: state,
        view: PageView({
            view,
            info,
        }),
        node: document.body,
    })
}