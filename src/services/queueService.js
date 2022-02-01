const URL = "https://lightenup-heroku.herokuapp.com"

export const getQueue = () =>
    fetch(`${URL}/getQueue`)
    .then(response => response.json())


export const addToQueue = (typeId) =>
    fetch(`${URL}/addToQueue/${typeId}`)
        .then(response => {
            return response.json()
    })



export const deleteFromQueue = (animId) =>
    fetch(`${URL}/deleteFromQueue/${animId}`)
        .then(response => {
            return response.json()
    })



export default { getQueue, addToQueue, deleteFromQueue }
