import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function MidBodyScrollProgressLine() {
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const lineRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const percentage = (scrollTop / scrollHeight) * 100
            setScrollPercentage(percentage)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            ref={lineRef}
            style={{
                position: "fixed", // Fixed position for consistent placement
                top: "50%", // Center vertically
                left: 0,
                width: "100%",
                height: "5px",
                transform: "translateY(-50%)", // Correct vertical centering
                pointerEvents: "none",
                zIndex: 1000, // Ensure it's above other content
            }}
        >
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${scrollPercentage}%`,
                    background: "linear-gradient(to right, #4caf50, #81c784)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${scrollPercentage}%` }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            />
        </div>
    )
}
