import { send } from '../utils/fetch'

export const ADD_ITEM = 'ADD_ITEM';
export const SET_FILTER = 'SET_FILTER';
export const SET_ALL_CHECKED = 'SET_ALL_CHECKED';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
export const CHANGE_EDITING = 'CHANGE_EDITING';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CONFIRM_MODAL = 'CONFIRM_MODAL';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const GET_ITEMS_FOR_USER = 'GET_ITEMS_FOR_USER';

export const Filters = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
}

export function submitForm(id, name, password) {
    return send('/user', 'POST', JSON.stringify({
        id: id,
        name: name,
        password: password
    }), SUBMIT_FORM)
}

export function getItemsForUser(userID) {
    return send('/user/items/${userID}', 'GET', undefined, GET_ITEMS_FOR_USER)
}

export function getAllItems() {
    return send('/items', 'GET', undefined, GET_ALL_ITEMS)
}

export function addItem(id, text, completed, editing, userName) {
    return send('/item', 'POST', JSON.stringify({
        id: id,
        text: text,
        completed: completed,
        editing: editing,
        userName: userName
    }), ADD_ITEM)
}

export function showModal(deleteManyItems, itemIdToBeDeleted) {
    return {
        type: SHOW_MODAL,
        deleteManyItems,
        itemIdToBeDeleted
    }
}

export function confirmModal(itemIdToBeDeleted, deleteManyItems) {
    return send('/items/${itemIdToBeDeleted}', 'DELETE', JSON.stringify({
        id: itemIdToBeDeleted,
        deleteManyItems: deleteManyItems
    }), CONFIRM_MODAL)
}

export function changeEditing(id) {
    return {
        type: CHANGE_EDITING,
        id
    }
}

export function updateItem(id, completed, text) {
    return send('/items/${id}', 'PUT', JSON.stringify({
        id: id,
        completed: completed,
        text: text
    }), UPDATE_ITEM)
}

export function changeCompleted(id, check, text) {
    return send('/items/${id}', 'PUT', JSON.stringify({
        id: id,
        completed: check,
        text: text
    }), CHANGE_COMPLETED)
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function setAllChecked(allChecked) {
    return send('/items', 'PUT', JSON.stringify({
        allChecked: allChecked
    }), SET_ALL_CHECKED)
}