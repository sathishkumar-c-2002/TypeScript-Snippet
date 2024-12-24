import type { ComponentType } from "react"
import { useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
export function videoScrollProgress(Component): ComponentType {
    const SCROLL_START = 0 // Scroll position when animation starts
    const SCROLL_DISTANCE = 500 // Scroll distance after which animation ends
    const SCROLL_END = SCROLL_START + SCROLL_DISTANCE
    return (props) => {
        // useScroll() returns the current scroll position
        const { scrollY } = useScroll()
        // Calculate the scroll progress from 0 to 1
        const progress = useTransform(
            scrollY,
            [SCROLL_START, SCROLL_END],
            [0, 1]
        )
        // Pass the progress as a prop to the original component
        return <Component {...props} progress={progress} />
    }
}
