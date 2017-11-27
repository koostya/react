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

export const Filters = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
};

export function addItem(id, text, completed, editing) {
    fetch('/a', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text
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

export function confirmModal() {
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

export function updateItem(id, text) {
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

export function changeCompleted(id, check) {
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
    return {
        type: SET_ALL_CHECKED,
        allChecked
    }
}