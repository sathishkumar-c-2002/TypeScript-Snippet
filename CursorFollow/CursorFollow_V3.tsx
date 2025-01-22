import { useState } from "react"
import { Frame } from "framer"

export function ImageWithOverlay() {
    const [hover, setHover] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hover) {
            setPosition({
                x: e.clientX - 300,
                y: e.clientY - 300,
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
            width={300}
            height={200}
            onMouseMove={handleMouseMove}
            onHoverStart={handleMouseEnter}
            onHoverEnd={handleMouseLeave}
            style={{ position: "relative", borderRadius: "10px" }}
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
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* Overlay */}
            <Frame
                width={500}
                height={200}
                background="linear-gradient(135deg, #6a11cb, #2575fc)"
                opacity={hover ? 1 : 0}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: 0,
                    overflow: "hidden",
                    left: position.x + "px",
                    top: position.y + "px",
                    zIndex: 1,
                    borderRadius: "15px",
                    padding: "20px 0 0 20px",
                    overflowY: "auto",
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
                        color: "#ffffff",
                        fontFamily: "'Poppins', sans-serif", // Professional font
                        fontWeight: "bold",
                        fontSize: "20px", // Larger font size for emphasis
                        marginBottom: "15px",
                        textAlign: "center", // Centered title
                        textTransform: "uppercase", // Uppercase for emphasis
                        letterSpacing: "2px", // Letter spacing for a modern look
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", // Glowing effect
                    }}
                >
                    Robot Features
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
                    }}
                >
                    <ul style={{ paddingLeft: "20px", listStyleType: "none" }}>
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
                                <i className="fas fa-cogs"></i>{" "}
                                {/* Futuristic icon for list item */}
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
                            </span>
                            Durable and efficient design.
                        </li>
                    </ul>
                </Frame>
            </Frame>
        </Frame>
    )
}
