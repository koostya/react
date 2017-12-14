import fetch from 'isomorphic-fetch'

export function setAllItemsCheckedAPI(allChecked) {
    return fetch('http://localhost:3001/items', {
        method: "PUT",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            allChecked: allChecked
        })
    }).then((res) => {
        return res.json()
    }).then((json) => {
        return json
    })
}
