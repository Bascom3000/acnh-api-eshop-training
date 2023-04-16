

const baseUrl = 'http://acnhapi.com/v1a'

 function getFossils() {
    return fetch(`${baseUrl}/fossils`)
    .then(res => res.json())
}

function getHouseware() {
    return fetch(`${baseUrl}/houseware`)
    .then(res => res.json())
}

function getArt() {
    return fetch(`${baseUrl}/art`)
    
    .then(res => res.json())
}

export {
    getFossils,
    getHouseware,
    getArt
}