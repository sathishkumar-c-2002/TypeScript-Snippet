import type { ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import React, { useState, useEffect } from "react"

const useStore = createStore({ index: 0, movieCount: 1 })

export function withIncrement(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        return (
            <Component
                {...props}
                onClick={() => {
                    if (store.index < store.movieCount - 1) {
                        setStore({ index: store.index + 1 })
                    }
                }}
                variant={
                    store.index === store.movieCount - 1 ? "Disabled" : "Active"
                }
            />
        )
    }
}

export function withDecrement(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        return (
            <Component
                {...props}
                onClick={() => {
                    if (store.index !== 0) {
                        setStore({ index: store.index - 1 })
                    }
                }}
                variant={store.index === 0 ? "Disabled" : "Active"}
            />
        )
    }
}

export function withMovie(Component): ComponentType {
    return (props) => {
        const [movies, setMovies] = useState([])
        const [store, setStore] = useStore()
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const options = {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzczMzFiNzQ1NTk2NDhiN2U1ZDUwYWEzNGRlYTE0OCIsIm5iZiI6MTczMzU1NTg1Ni4yMywic3ViIjoiNjc1M2Y2OTA2NzhiMTgzNGQ5N2I5NDQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.j5-Rj_cpIZsJhwtRCcoGh0xJysphQGZWH0Hxum2C0Fg",
                        },
                    }

                    const response = await fetch(
                        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                        options
                    )
                        .then((response) => response.json())
                        // .then((res) => console.log(res))
                        .catch((err) => console.error(err))

                    setMovies(response.results)
                    setStore({ movieCount: response.results.length })
                    console.log(response, movies)
                } catch (error) {
                    console.log("Error fetching data: ", error)
                }
            }
            fetchData()
        }, [])

        if (movies.length > 0) {
            return (
                <Component
                    {...props}
                    title={movies[store.index].title}
                    overview={`${movies[store.index].overview}`}
                    date={movies[store.index].release_date}
                    poster={`https://image.tmdb.org/t/p/w500/${movies[store.index].poster_path}`}
                />
            )
        }
    }
}
