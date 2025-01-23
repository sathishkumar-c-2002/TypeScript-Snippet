import { useState } from "react"
import { Frame } from "framer"

export function ImageWithOverlay() {
    const [hover, setHover] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hover) {
            const frameRect = e.currentTarget.getBoundingClientRect()
            setPosition({
                x: e.clientX - frameRect.left - 50, // Dynamic X offset (adjust as needed)
                y: e.clientY - frameRect.top + 10, // Dynamic Y offset below the cursor
            })
        }
    }

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    return (
        <Frame
            width={180}
            height={200}
            onMouseMove={handleMouseMove}
            onHoverStart={handleMouseEnter}
            onHoverEnd={handleMouseLeave}
            style={{
                position: "relative",
                borderRadius: "100px",
                marginBottom: "20px",
                background: "transparent",
            }}
        >
            {/* Image */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100px",
                    overflow: "hidden",
                    objectFit: "contain",
                }}
            >
                <img
                    src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cute-cartoon-3d-robot-png-image_13091152.png"
                    alt="Robot"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* Overlay */}
            <Frame
                width={200}
                height={100}
                background={hover ? "#fff" : "transparent"}
                opacity={hover ? 1 : 0}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: `${position.y}px`, // Dynamic Y position
                    left: `${position.x}px`, // Dynamic X position
                    zIndex: 1,
                    padding: "10px",
                    border: "1px solid red",
                    borderRadius: "100px",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.5)",
                    transform: hover ? "scale(1.05)" : "scale(1)",
                    transition:
                        "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                }}
            >
                {/* Title */}
                <div
                    style={{
                        color: "#000",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginBottom: "8px",
                        textAlign: "center",
                    }}
                >
                    Decision Support Agent
                </div>

                {/* List */}
                <ul
                    style={{
                        padding: "0",
                        margin: "0",
                        listStyleType: "none",
                        textAlign: "left",
                    }}
                >
                    <li
                        style={{
                            marginBottom: "6px",
                            color: "#ffcc00",
                            fontWeight: "bold",
                        }}
                    >
                        Advanced AI capabilities.
                    </li>
                    <li
                        style={{
                            marginBottom: "6px",
                            color: "#ffcc00",
                            fontWeight: "bold",
                        }}
                    >
                        High-speed processing.
                    </li>
                    <li style={{ color: "#ffcc00", fontWeight: "bold" }}>
                        Durable and efficient design.
                    </li>
                </ul>
            </Frame>
        </Frame>
    )
}
