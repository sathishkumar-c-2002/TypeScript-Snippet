import type { ComponentType } from "react"

export const zohoCreator = (Component): ComponentType => {
    return (props) => {
        return (
            <Component
                {...props}
                imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUK9y--YWEgM4-vT8rgZuV_7Lb6U4OiC51A&s"
            />
        )
    }
}
