import url from './url'
import {redirect} from 'react-router-dom'


// create action
export const createAction = async({request}) => {
    const formData = await request.formData();
    const newCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })
    return redirect("/")
}

// update action
export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updateCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    await fetch(url + id, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateCheese)
    })
    return redirect("/")
}

// delete action
export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })
    return redirect("/")
}