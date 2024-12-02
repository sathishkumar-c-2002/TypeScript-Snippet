import * as React from "react"
import { Override } from "framer"

// Override for the button
export function ButtonOverride(): Override {
    return {
        style: {
            padding: "15px 30px", // Larger padding for prominence
            background: "linear-gradient(90deg, #6a00f4, #c100e8)", // Futuristic gradient background
            color: "#fff", // Text color
            fontWeight: "bold", // Emphasize text
            fontSize: "18px", // Slightly larger text
            letterSpacing: "1px", // Add space between letters
            textTransform: "uppercase", // Uppercase text for style
            border: "none", // Clean look
            borderRadius: "30px", // Rounded edges
            cursor: "pointer", // Pointer cursor on hover
            transition: "all 0.4s ease", // Smooth transition for hover effects
            boxShadow: "0 4px 20px rgba(106, 0, 244, 0.6)", // Glow shadow
        },
        onMouseEnter(event) {
            event.currentTarget.style.background =
                "linear-gradient(90deg, #c100e8, #6a00f4)" // Reverse gradient on hover
            event.currentTarget.style.transform = "scale(1.1)" // Slight zoom effect
            event.currentTarget.style.boxShadow =
                "0 8px 30px rgba(193, 0, 232, 0.8)" // Brighter glow
        },
        onMouseLeave(event) {
            event.currentTarget.style.background =
                "linear-gradient(90deg, #6a00f4, #c100e8)" // Reset to default gradient
            event.currentTarget.style.transform = "scale(1)" // Reset scale
            event.currentTarget.style.boxShadow =
                "0 4px 20px rgba(106, 0, 244, 0.6)" // Reset glow
        },
    }
}
