import { Override, motion } from "framer"
import { useState } from "react"

export function MouseFollowImage(): Override {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        setPosition({
            x: e.clientX - 100,
            y: e.clientY - 100,
        })
    }

    return {
        onMouseMove: handleMouseMove,
        style: {
            position: "relative",
            left: position.x + "px",
            top: position.y + "px",
        },
        transition: { type: "spring", stiffness: 100, damping: 20 },
    }
}
