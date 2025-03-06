import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function VerticalScrollProgressBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0)

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
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "30px",
                height: "100%",
                background: "#f3f3f3",
                zIndex: 1000,
            }}
        >
            <motion.div
                style={{
                    width: "100%",
                    height: `${scrollPercentage}%`,
                    background: "linear-gradient(to bottom, #4caf50, #81c784)",
                }}
                initial={{ height: 0 }}
                animate={{ height: `${scrollPercentage}%` }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            />
        </motion.div>
    )
}
