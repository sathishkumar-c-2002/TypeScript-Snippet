import { useState } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function ImageWithOverlay(props) {
    const [hover, setHover] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hover) {
            const frameRect = e.currentTarget.getBoundingClientRect()
            const offsetX = 40
            const offsetY = 40

            setPosition({
                x: e.clientX - frameRect.left + offsetX,
                y: e.clientY - frameRect.top + offsetY,
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
                    src={props.imageSrc} // Use the passed imageSrc property
                    alt="Robot"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>

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
                    {props.overlayTitle} {/* Use the passed title property */}
                </Frame>

                <Frame
                    width="100%"
                    height="auto"
                    style={{
                        marginTop: "40px",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.6",
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
                            {props.feature1} {/* Use feature1 property */}
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
                            {props.feature2} {/* Use feature2 property */}
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
                            {props.feature3} {/* Use feature3 property */}
                        </li>
                    </ul>
                </Frame>
            </Frame>
        </Frame>
    )
}

// Add property controls to make it customizable in Framer
addPropertyControls(ImageWithOverlay, {
    imageSrc: {
        type: ControlType.Image,
        title: "Image Source",
        defaultValue:
            "https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-cute-cartoon-3d-robot-png-image_13091152.png",
    },
    overlayTitle: {
        type: ControlType.String,
        title: "Overlay Title",
        defaultValue: "Decision Support Agent",
    },
    feature1: {
        type: ControlType.String,
        title: "Feature 1",
        defaultValue: "Advanced AI capabilities.",
    },
    feature2: {
        type: ControlType.String,
        title: "Feature 2",
        defaultValue: "High-speed processing.",
    },
    feature3: {
        type: ControlType.String,
        title: "Feature 3",
        defaultValue: "Durable and efficient design.",
    },
})
