import type { ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0"
import useMousePosition from "./useMousePosition.jsx"
import { useEffect } from "react"
// Learn more: https://www.framer.com/docs/guides/overrides/
const MASKSIZE = {
    initial: 50,
    onHover: 400,
}

const MASK_IMAGEURL =
    "https://framerusercontent.com/images/De0CMakQwO0HOVWPyQnVeTw.svg"

const useStore = createStore({
    mousePos: {
        x: 0,
        y: 0,
    },
    size: MASKSIZE.initial,
})

export function withMaskHover(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        return (
            <Component
                {...props}
                onMouseEnter={() => {
                    setStore({ ...store, size: MASKSIZE.onHover })
                }}
                onMouseLeave={() => {
                    setStore({ ...store, size: MASKSIZE.initial })
                }}
            />
        )
    }
}

export function withMaskFrame(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const { x, y } = useMousePosition()
        useEffect(() => {
            setStore({ ...store, mousePos: { x: x, y: y } })
        }, [])
        return (
            <Component
                {...props}
                animate={{
                    WebkitMaskPosition: `${x - store.size / 2}px ${
                        y - store.size / 2
                    }px`,
                    WebkitMaskSize: `${store.size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{
                    WebkitMaskSize: `${store.size}px`,
                    WebkitMaskImage: `url(${MASK_IMAGEURL})`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: `${x - store.size / 2}px ${
                        y - store.size / 2
                    }px`,
                }}
            />
        )
    }
}
