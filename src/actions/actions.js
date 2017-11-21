export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_FILTER = 'SET_FILTER';
export const SET_ALL_CHECKED = 'SET_ALL_CHECKED';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
export const CHANGE_EDITING = 'CHANGE_EDITING';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const Filters = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
};

export function addItem(id, text, completed, editing) {
    return {
        type: ADD_ITEM,
        id,
        text,
        completed,
        editing
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

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export function changeCompleted(id) {
    return {
        type: CHANGE_COMPLETED,
        id
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