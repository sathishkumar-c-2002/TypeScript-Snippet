import * as React from "react"
import { Override } from "framer"

// Override for the side navigation text
export function SideNavOverride(): Override {
    return {
        style: {
            padding: "10px 20px", // Padding for the navigation item
            fontSize: "18px", // Text size for prominence
            fontWeight: "bold", // Bold text for emphasis
            textTransform: "uppercase", // Uppercase text for a modern look
            textDecoration: "none", // No underline
            cursor: "pointer", // Pointer cursor on hover
            position: "relative", // For hover animation positioning
            color: "transparent", // Make the text transparent initially
            backgroundImage: "linear-gradient(90deg, #6a00f4, #c100e8)", // Gradient for the text
            backgroundClip: "text", // Clip the background to the text
            WebkitBackgroundClip: "text", // WebKit support for background clip
            transition: "all 0.4s ease", // Smooth transition for hover effects
        },
        onMouseEnter(event) {
            const element = event.currentTarget
            element.style.color = "transparent" // Keep text transparent
            element.style.backgroundImage =
                "linear-gradient(90deg, #c100e8, #6a00f4)" // Animate gradient
            element.style.transform = "scale(1.1)" // Slight zoom effect
            element.style.textShadow = "0 4px 10px rgba(193, 0, 232, 0.8)" // Add a glow effect
            element.style.borderBottom = "2px solid #c100e8" // Add underline animation
        },
        onMouseLeave(event) {
            const element = event.currentTarget
            element.style.color = "transparent" // Reset to transparent text
            element.style.backgroundImage =
                "linear-gradient(90deg, #6a00f4, #c100e8)" // Reset gradient
            element.style.transform = "scale(1)" // Reset scale
            element.style.textShadow = "none" // Remove glow effect
            element.style.borderBottom = "none" // Remove underline
        },
    }
}
