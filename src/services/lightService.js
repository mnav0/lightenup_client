const URL = "http://10.40.72.96:8000"

const triggerLight = () =>
    fetch(`${URL}`)
    .then(response => response.json())

const lightService = { triggerLight }

export default lightService;