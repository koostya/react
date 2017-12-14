import fetch from 'isomorphic-fetch'

export function appLoadAPI(name) {
    return fetch('http://localhost:3001/list/user/:name?name=' + name, {
        method: "GET",
        header: {
            'Content-Type': 'application/json'
        },
        body: undefined
    }).then((res) => {
        return res.json()
    }).then((json) => {
        return json
    })
}