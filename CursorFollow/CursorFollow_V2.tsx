import { useState } from "react"
import { Frame } from "framer"

export function ImageWithOverlay() {
    const [hover, setHover] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    // Track mouse movement to follow the cursor
    const handleMouseMove = (e: React.MouseEvent) => {
        if (hover) {
            setPosition({
                x: e.clientX - 100, // Adjust to fit overlay size
                y: e.clientY - 100, // Adjust to fit overlay size
            })
        }
    }

    // Handle mouse enter and leave events for the image to control when the overlay moves
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
            onMouseMove={handleMouseMove} // Track mouse movement over the image
            onHoverStart={handleMouseEnter} // Start moving the overlay on hover
            onHoverEnd={handleMouseLeave} // Stop moving the overlay on mouse leave
            style={{ position: "relative", borderRadius: "10px" }}
        >
            {/* Create a div to hold the image */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    overflow: "hidden", // Ensures image doesn't overflow the div
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

            {/* Overlay Frame */}
            <Frame
                width={250} // You can adjust the width of the overlay
                height={220} // Set the height based on your content
                background="rgba(0, 0, 0, 0.5)"
                opacity={hover ? 1 : 0}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: -260, // Position the overlay to the left of the image
                    zIndex: 1, // Ensure overlay appears above other elements
                    borderRadius: "10px",
                    left: position.x + "px", // Move overlay with mouse
                    top: position.y + "px", // Move overlay with mouse
                    padding: "10px",
                    overflowY: "auto", // Allows scrolling if text overflows
                }}
            >
                {/* Title */}
                <Frame
                    width="100%"
                    height="auto"
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginBottom: "10px",
                    }}
                >
                    Robot Title
                </Frame>

                {/* Description with Bullet Points */}
                <Frame
                    width="100%"
                    height="auto"
                    style={{ color: "white", fontSize: "14px" }}
                >
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>Point one about the robot.</li>
                        <li>Point two about the robot.</li>
                        <li>Point three about the robot.</li>
                    </ul>
                </Frame>
            </Frame>
        </Frame>
    )
}
