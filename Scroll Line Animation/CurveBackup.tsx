import React, { useState, useEffect } from "react"

export function CurvedProgressBar2(): JSX.Element {
    const [dashOffset, setDashOffset] = useState<number>(1000)
    const [translateY, setTranslateY] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const scrollPercentage = scrollTop / scrollHeight
            const newDashOffset = 1000 - scrollPercentage * 1000
            setDashOffset(newDashOffset)

            const newTranslateY = -scrollTop
            setTranslateY(newTranslateY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "2000px",
                pointerEvents: "none",
                zIndex: 1000,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 1000" // Adjusted viewBox
                preserveAspectRatio="none"
                style={{
                    width: "100%",
                    height: "2000px",
                    transform: `translateY(${translateY}px)`,
                }}
            >
                {/* Define the blue gradient */}
                <defs>
                    <linearGradient
                        id="blueGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#2196F3" />{" "}
                        {/* Bright Blue */}
                        <stop offset="50%" stopColor="#00BCD4" />{" "}
                        {/* Cyan Blue */}
                        <stop offset="100%" stopColor="#3F51B5" />{" "}
                        {/* Deep Indigo Blue */}
                    </linearGradient>
                </defs>
                <path
                    d="M0,50 C150,100 50,150 120,200 S200,300 100,350 S20,380 80,420 S150,550 80,600 S10,700 150,750 S80,800 100,800"
                    style={{
                        // stroke: "#4caf50",
                        stroke: "url(#blueGradient)", // Use the gradient here
                        strokeWidth: 8,
                        fill: "none",
                        strokeDasharray: 1000, // Adjust this value as needed.
                        strokeDashoffset: dashOffset,
                        // transition: "stroke-dashoffset 1s linear",
                    }}
                />
            </svg>
        </div>
    )
}
