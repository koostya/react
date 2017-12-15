import fetch from 'isomorphic-fetch'

export function addItemAPI(id, text, completed, editing, userName) {
    return fetch('http://localhost:3001/item', {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            text: text,
            completed: completed,
            editing: editing,
            userName: userName
        })
    }).then((res) => {
        return res.json()
    }).then((json) => {
        return json
    })
}