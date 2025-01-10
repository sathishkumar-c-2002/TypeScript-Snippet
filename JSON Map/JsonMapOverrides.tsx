import type { ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import React, { useState, useEffect } from "react"

export function members(Component): ComponentType {
    return (props) => {
        const variable = JSON.parse(
            '{"members": [{"name": "Molecule Man","age": 29,"name1": "Dan Juks"},{"name": "Madame Uppercut","age": 39,"name1": "Jane Wilson"},{"name": "Eternal Flame","age": 1000000,"name1": "Unknown"}]}'
        )
        return (
            <>
                {variable.members.map((member, index) => (
                    <Component
                        key={index}
                        {...props}
                        named={member.name.toString()}
                        age={member.age.toString()}
                    />
                ))}
            </>
        )
    }
}
