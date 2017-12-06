import { send } from '../utils/fetch'
import { history } from '../index'

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
export const LOGOUT = 'LOGOUT';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_ERR = 'REGISTRATION_ERR';

export const Filters = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
}

export function submitForm(id, name, password) {
    return (dispatch) => {
        fetch('/user', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                password: password
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            localStorage.setItem('user', json.name)
            localStorage.setItem('login', true)

            history.push('/list')   

            dispatch({
                type: SUBMIT_FORM,
                body: json
            })
        })
    }
}

export function submitFormRegis(id, nickname, name, surname, phone, password) { 
    return (dispatch) => {
        fetch('/users', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nickname: nickname,
                name: name,
                surname: surname,
                phone: phone,
                password: password
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if(json.userAlreadyExist == true) {
                history.push('/registration') 
                
                dispatch({
                    type: REGISTRATION_ERR,
                    body: json
                })
            } else {
                localStorage.setItem('user', json.nickname)
                localStorage.setItem('login', true)
    
                history.push('/list')   
    
                dispatch({
                    type: REGISTRATION,
                    body: json
                })
            }
        })
    }
}

export function logout() {
    localStorage.clear()

    history.push('/login')  

    return {
        type: LOGOUT
    }
}

export function getItemsForUser(name) {
    return send('/list/user/:name?name=' + name, 'GET', undefined, GET_ITEMS_FOR_USER)
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

export function confirmModal(itemIdToBeDeleted, deleteManyItems, user) {
    return send('/items/:id?id=' + itemIdToBeDeleted + '&deleteManyItems=' + deleteManyItems + '&user=' + user, 'DELETE', {}, CONFIRM_MODAL)
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