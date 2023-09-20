import url from "./url"

export const indexLoader = async () => {
    const response = await fetch(url)
    const cheeses = await response.json()
    return cheeses
}

export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const cheese = await response.json()
    return cheese
}

