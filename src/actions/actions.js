export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_FILTER = 'SET_FILTER';

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

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}