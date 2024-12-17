import * as React from "react"
import { Override } from "framer"

// Override for the button
export function ButtonOverride(): Override {
    return {
        onMouseEnter(event) {
            event.currentTarget.style.background =
                "linear-gradient(to bottom, #00ff00, #87ceeb)" // Green on top, sky blue at the bottom
            event.currentTarget.style.transform = "scale(1.1)" // Slight zoom effect
            event.currentTarget.style.boxShadow =
                "0 8px 30px rgba(135, 206, 235, 0.8)" // Brighter glow
        },
        onMouseLeave(event) {
            event.currentTarget.style.background = "#ffffff" // Reset to green to sky blue gradient
            event.currentTarget.style.transform = "scale(1)" // Reset scale
            event.currentTarget.style.boxShadow =
                "0 4px 20px rgba(0, 255, 0, 0.6)" // Reset glow
        },
    }
}
