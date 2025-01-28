import React from "react"

export function UrlUser() {
    const queryParams = new URLSearchParams(window.location.search)
    const name = queryParams.get("name")

    let content
    let text = ""

    if (name === "jai") {
        text = name
        content = (
            <iframe
                src="https://xmind.ai/embed/AsYLZWMn?sheet-id=6ebbcdaf8869b8029a3e08bbab"
                width="2000px"
                height="950px"
                frameBorder="0"
                scrolling="no"
                allow="fullscreen"
            ></iframe>
        )
    } else if (name === "sathish") {
        text = name
        content = (
            <iframe
                src="https://xmind.ai/embed/j3MkwiUm"
                width="2000px"
                height="950px"
                frameBorder="0"
                scrolling="no"
                allow="fullscreen"
            ></iframe>
        )
    } else {
        text = "Not Found"
        content = <h1>Not Found</h1>
    }

    return <div>{content}</div>
}
