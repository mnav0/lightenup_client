const URL = "https://lightenup-heroku.herokuapp.com"

const getQueue = () =>
    fetch(`${URL}/getQueue`)
    .then(response => response.json())

const addToQueue = (typeId) =>
    fetch(`${URL}/addToQueue/${typeId}`)
        .then(response => {
            return response.json()
    })

const deleteFromQueue = (animId) =>
    fetch(`${URL}/deleteFromQueue/${animId}`)
        .then(response => {
            return response.json()
    })

const queueService = { getQueue, addToQueue, deleteFromQueue }

export default queueService;
