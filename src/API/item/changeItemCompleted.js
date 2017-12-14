import fetch from 'isomorphic-fetch'

export function changeItemCompletedAPI(id, check, text) {
    return fetch('http://localhost:3001/items/${id}', {
        method: "PUT",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            completed: check,
            text: text
        })
    }).then((res) => {
        return res.json()
    }).then((json) => {
        return json
    })
}
