import { send } from '../utils/fetch'
import { history } from '../index'
import { 
    GET_ITEMS_FOR_USER,
    GET_ALL_ITEMS,
    ADD_ITEM,
    SET_ALL_ITEMS_CHECKED,
    CONFIRM_MODAL,
    REMOVE_ITEMS_ON_CONFIRM_MODAL,
    CHANGE_EDITING,
    UPDATE_ITEM,
    CHANGE_COMPLETED
} from './CONSTS'

export function getItemsForUser(name) {
    return send('http://localhost:3001/list/user/:name?name=' + name, 'GET', undefined, GET_ITEMS_FOR_USER)
}

export function getAllItems() {
    return send('http://localhost:3001/items', 'GET', undefined, GET_ALL_ITEMS)
}

export function addItem(id, text, completed, editing, userName) {
    return send('http://localhost:3001/item', 'POST', JSON.stringify({
        id: id,
        text: text,
        completed: completed,
        editing: editing,
        userName: userName
    }), ADD_ITEM)
}

export function setAllItemsChecked(allChecked) {
    return send('http://localhost:3001/items', 'PUT', JSON.stringify({
        allChecked: allChecked
    }), SET_ALL_ITEMS_CHECKED)
}

export function removeItemsOnConfirmModal(itemIdToBeDeleted, deleteManyItems, user) {
    return (dispatch) => {
        fetch('http://localhost:3001/items/:id?id=' + itemIdToBeDeleted + '&deleteManyItems=' + deleteManyItems + '&user=' + user, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json'
            },
            body: {}
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: REMOVE_ITEMS_ON_CONFIRM_MODAL,
                body: {
                    itemIdToBeDeleted: itemIdToBeDeleted
                }
            })
        }).then(() => {
            dispatch({
                type: CONFIRM_MODAL
            })
        })
    }
}

export function changeEditing(id) {
    return {
        type: CHANGE_EDITING,
        id
    }
}

export function updateItem(id, completed, text) {
    return send('http://localhost:3001/items/${id}', 'PUT', JSON.stringify({
        id: id,
        completed: completed,
        text: text
    }), UPDATE_ITEM)
}

export function changeCompleted(id, check, text) {
    return send('http://localhost:3001/items/${id}', 'PUT', JSON.stringify({
        id: id,
        completed: check,
        text: text
    }), CHANGE_COMPLETED)
}