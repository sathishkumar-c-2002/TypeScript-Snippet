import * as React from "react"
import { Override } from "framer"

// Override for the button
export function ButtonOverride(): Override {
    return {
        onMouseEnter(event) {
            event.currentTarget.style.background =
                "linear-gradient(to bottom, #ECF7C1, #4CC4E6)"
            // Teal (#008080) to turquoise (#40e0d0), royal blue (#1e90ff), and slate blue (#6a5acd)
            event.currentTarget.style.transform = "scale(1)" // Slight zoom effect
            event.currentTarget.style.boxShadow =
                "0 8px 30px rgba(30, 144, 255, 0.8)" // Brighter blue glow
        },
        onMouseLeave(event) {
            event.currentTarget.style.background = "#ffffff"
            // Reset gradient
            event.currentTarget.style.transform = "scale(1)" // Reset scale
            event.currentTarget.style.boxShadow =
                "0 4px 20px rgba(106, 90, 205, 0.6)" // Reset glow with purple tone
        },
    }
}
