/// Curved line with fixed Position
import React, { useState, useEffect, useRef } from "react"

export function CurvedProgressBar(): JSX.Element {
    const [dashOffset, setDashOffset] = useState<number>(1000)
    const pathRef = useRef<SVGPathElement>(null)

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
                height: "100%",
                pointerEvents: "none",
                zIndex: 1000,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "100%" }}
            >
                <path
                    ref={pathRef}
                    d="M0,0 C25,50 75,50 100,100"
                    style={{
                        stroke: "#4caf50",
                        strokeWidth: 8,
                        fill: "none",
                        strokeDasharray: 1000,
                        strokeDashoffset: dashOffset,
                        transition: "stroke-dashoffset 0.1s linear",
                    }}
                />
            </svg>
        </div>
    )
}
