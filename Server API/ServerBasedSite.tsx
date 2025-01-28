import React, { useState, useEffect } from "react"
import { Frame } from "framer"

function GeolocationComponent() {
    const [country, setCountry] = useState(null)

    useEffect(() => {
        async function fetchLocation() {
            const response = await fetch("https://ipapi.co/json/")
            const data = await response.json()
            setCountry(data.country_name)
        }
        fetchLocation()
    }, [])

    useEffect(() => {
        if (country) {
            if (country === "India") {
                window.location.href =
                    "https://graceful-tenure-608515.framer.app/parallax-4"
            } else if (country === "United States") {
                window.location.href =
                    "https://graceful-tenure-608515.framer.app/loading-page-animation"
            } else {
                window.location.href = "https://www.google.com"
            }
        }
    }, [country])

    return (
        <Frame
            width="100%"
            height="100%"
            background="#f0f0f0"
            style={{ textAlign: "center", padding: "20px" }}
        >
            <h1>Loading...</h1>
        </Frame>
    )
}

export default GeolocationComponent
