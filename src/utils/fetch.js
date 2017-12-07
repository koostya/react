import fetch from 'isomorphic-fetch'

export function send(url, method, body, type) {
    return (dispatch) => {
        fetch(url, {
            method: method,
            header: {
                'Content-Type': 'application/json'
            },
            body: body
        }).then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json)
            dispatch({
                type: type,
                body: json
            })
        })
    }
}