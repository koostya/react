import fetch from 'isomorphic-fetch'

export function upadateItemAPI(id, completed, text) {
    return fetch('http://localhost:3001/items/${id}', {
        method: "PUT",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            completed: completed,
            text: text
        })
    }).then((res) => {
        return res.json()
    }).then((json) => {
        return json
    })
}
