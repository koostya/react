import fetch from 'isomorphic-fetch'

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_FILTER = 'SET_FILTER';
export const SET_ALL_CHECKED = 'SET_ALL_CHECKED';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
export const CHANGE_EDITING = 'CHANGE_EDITING';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SHOW_MODAL = 'SHOW_MODAL';
export const MULTIPLE_DELITING = 'MULTIPLE_DELITING';
export const CONFIRM_MODAL = 'CONFIRM_MODAL';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const Filters = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
};

export function getAllItems() {
    return (dispatch) => {
        fetch('/items', {
            method: 'GET'
        }).then((res) => {
            return res.json()
        }).then((items) => {
            dispatch({
                type: GET_ALL_ITEMS,
                items: items
            })
        })
    }
}

export function addItem(id, text, completed, editing) {
    fetch('/items', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            text: text,
            completed: completed,
            editing: editing
        })
    })

    return {
        type: ADD_ITEM,
        id,
        text,
        completed,
        editing
    }
}

export function showModal(deleteManyItems, itemIdToBeDeleted) {
    return {
        type: SHOW_MODAL,
        deleteManyItems,
        itemIdToBeDeleted
    }
}

export function confirmModal(itemIdToBeDeleted, deleteManyItems) {
    fetch('/items/${itemIdToBeDeleted}', {
        method: 'DELETE',
        body: JSON.stringify({
            id: itemIdToBeDeleted,
            deleteManyItems: deleteManyItems
        })
    })

    return {
        type: CONFIRM_MODAL
    }
}

export function multipleDeliting(deleteManyItems) {
    return {
        type: MULTIPLE_DELITING,
        deleteManyItems
    }
}

export function changeEditing(id) {
    return {
        type: CHANGE_EDITING,
        id
    }
}

export function updateItem(id, completed, text) {
    fetch('/items/${id}', {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            completed: completed,
            text: text
        })
    })

    return {
        type: UPDATE_ITEM,
        id,
        text
    }
}

export function removeItem(id, deleteManyItems) {
    return {
        type: REMOVE_ITEM,
        id,
        deleteManyItems
    }
}

export function changeCompleted(id, check, text) {
    fetch('/items/${id}', {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            completed: check,
            text: text
        })
    })

    return {
        type: CHANGE_COMPLETED,
        id,
        check
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function setAllChecked(allChecked) {
    send('/items', 'PUT', JSON.stringify({
        allChecked: allChecked
    }), SET_ALL_CHECKED)
    
    // fetch('/items', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         allChecked: allChecked
    //     })
    // })

    // return {
    //     type: SET_ALL_CHECKED,
    //     allChecked
    // }
}

function send(url, method, body, type) {
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
            dispatch({
                type: type,
                body: json
            })
        })
    }
}