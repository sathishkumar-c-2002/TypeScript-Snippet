import { useState } from "react"
import { Frame } from "framer"

export function ImageWithOverlay() {
    const [hover, setHover] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hover) {
            const frameRect = e.currentTarget.getBoundingClientRect()
            setPosition({
                x: e.clientX - frameRect.left - 0,
                y: e.clientY - frameRect.top - 100,
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
            width={200}
            height={200}
            onMouseMove={handleMouseMove}
            onHoverStart={handleMouseEnter}
            onHoverEnd={handleMouseLeave}
            style={{
                position: "relative",
                borderRadius: "10px",
                marginBottom: "20px",
                background: "transparent",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
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
                width={500}
                height={200}
                background={hover ? "#fff" : "transparent"}
                opacity={hover ? 1 : 0}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: position.y + "px",
                    left: position.x + "px",
                    zIndex: 1,
                    overflow: "hidden",
                    border: "1px solid red",
                    borderRadius: "100px",
                    padding: "20px 0 0 20px",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.5)",
                    transform: hover ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                }}
            >
                {/* Title */}
                <Frame
                    width="100%"
                    height="auto"
                    style={{
                        color: "#000",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginBottom: "15px",
                        textTransform: "inherit",
                        letterSpacing: "0px",
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                        background: "transparent",
                    }}
                >
                    Decision Support Agent
                </Frame>

                {/* List */}
                <Frame
                    width="100%"
                    height="auto"
                    style={{
                        marginTop: "40px",
                        color: "#ffffff", // White text for better readability
                        fontSize: "14px", // Font size for easy reading
                        fontFamily: "'Poppins', sans-serif", // Clean, modern font
                        lineHeight: "1.6", // Line height for better spacing
                        background: "transparent",
                    }}
                >
                    <ul
                        style={{
                            paddingLeft: "20px",
                            listStyleType: "none",
                            padding: "0px 0 0 150px",
                        }}
                    >
                        <li
                            style={{
                                marginBottom: "12px",
                                position: "relative",
                                color: "#ffcc00",
                                fontWeight: "bold",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-25px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "#ffcc00",
                                }}
                            >
                                <i className="fas fa-cogs"></i>
                                {"→"}
                            </span>
                            Advanced AI capabilities.
                        </li>
                        <li
                            style={{
                                marginBottom: "12px",
                                position: "relative",
                                color: "#ffcc00",
                                fontWeight: "bold",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-25px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "#ffcc00",
                                }}
                            >
                                <i className="fas fa-cogs"></i>
                                {"→"}
                            </span>
                            High-speed processing.
                        </li>
                        <li
                            style={{
                                position: "relative",
                                color: "#ffcc00",
                                fontWeight: "bold",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-25px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "#ffcc00",
                                }}
                            >
                                <i className="fas fa-cogs"></i>
                                {"→"}
                            </span>
                            Durable and efficient design.
                        </li>
                    </ul>
                </Frame>
            </Frame>
        </Frame>
    )
}
