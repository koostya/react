import fetch from 'isomorphic-fetch'
import { history } from '../../index'

export function removeItemsOnConfirmModalAPI(itemIdToBeDeleted, deleteManyItems, user) {
    return fetch('http://localhost:3001/items/:id?id=' + itemIdToBeDeleted + '&deleteManyItems=' + deleteManyItems + '&user=' + user, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        },
        body: {}
    }).then((res) => {
        return res.json()
    }).then((json) => {
        return json
    })
}
