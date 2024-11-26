/*
BASIC PLAN              PREMIUM PLAN                ENTERPRISE PLAN
    99                       999                          9999
*/

import type { ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"

const useStore = createStore({
    period: "month",
    price: {
        basic: ["$29", "$222"],
        premium: ["$59", "$555"],
        enterprise: ["$99", "$999"],
    },
})

export function withTogglePeriod(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const newStore = store.period === "month" ? "year" : "month"
        const variant = store.period === "month" ? "Monthly" : "Annual"
        // console.log(store.period)
        return (
            <Component
                {...props}
                variant={variant}
                onClick={() => setStore({ period: newStore })}
            />
        )
    }
}

export function withBasicPrice(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const index = store.period === "month" ? 0 : 1
        return <Component {...props} text={store.price.basic[index]} />
    }
}
export function withPremiumPrice(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const index = store.period === "month" ? 0 : 1
        return <Component {...props} text={store.price.premium[index]} />
    }
}
export function withEnterprisePrice(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const index = store.period === "month" ? 0 : 1
        return <Component {...props} text={store.price.enterprise[index]} />
    }
}

export function withPeriod(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        return <Component {...props} text={`${store.period}`} />
    }
}