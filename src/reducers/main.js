import { combineReducers } from 'redux'
import {
    ADD_ITEM,
    SET_FILTER,
    SET_ALL_CHECKED,
    CHANGE_COMPLETED,
    CHANGE_EDITING,
    UPDATE_ITEM,
    SHOW_MODAL,
    CONFIRM_MODAL,
    GET_ALL_ITEMS,
    SUBMIT_FORM,
    GET_ITEMS_FOR_USER,
    LOGOUT,
    REGISTRATION,
    REGISTRATION_ERR,
    SUBMIT_FORM_ERR
} from '../actions/actions'

const initialState = {
    filter: 'ALL',
    items: [],
    chooseAllChecked: false,
    deleteManyItems: false,
    modal: false,
    itemIdToBeDeleted: 234,
    user: '',
    logged: false
}

function store(state = initialState, action) {
    switch(action.type) {

        case SUBMIT_FORM_ERR:
            return Object.assign({}, state, {
                noUserWasFound: action.body.noUserWasFound,
                user: action.body.name,
                password: action.body.password
            })

        case REGISTRATION_ERR:
            return Object.assign({}, state, {
                userAlreadyExist: action.body.userAlreadyExist,
                user: action.body.nickname,
                surname: action.body.surname,
                phone: action.body.phone,
                password: action.body.password
            })

        case REGISTRATION:
            return Object.assign({}, state, {
                user: action.body.nickname,
                userAlreadyExist: action.body.userAlreadyExist
            })

        case LOGOUT:
            return Object.assign({}, state, {
                user: '',
                password: ''
            })

        case GET_ALL_ITEMS:
            return Object.assign({}, state, {
                items: action.body
            })
        
        case GET_ITEMS_FOR_USER:
            return Object.assign({}, state, {
                items: action.body.items,
                user: action.body.name
            })

        case SUBMIT_FORM:
            return Object.assign({}, state, {
                items: action.body.items,
                logged: action.body.logged,
                user: action.body.name,
                noUserWasFound: action.body.noUserWasFound
            })

        case SET_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            })

        case SET_ALL_CHECKED:
            return Object.assign({}, state, {
                chooseAllChecked: action.body.allChecked,
                items: state.items.map((item) => {
                    if (item.completed !== action.body.allChecked) {
                        return Object.assign({}, item, {
                            completed: action.body.allChecked
                        })
                    }
                    return item
                })
            })

        case ADD_ITEM:
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    {
                        text: action.body.text,
                        completed: action.body.completed,
                        id: action.body.id,
                        editing: action.body.editing,
                        userName: action.body.userName
                    }
                ],
                user: action.body.userName
            })

        case UPDATE_ITEM:
            return Object.assign({}, state, { 
                items: state.items.map((item) => {
                    if (item.id === action.body.id) {
                        return Object.assign({}, item, {
                            text: action.body.text
                        })
                    }
                    return item
                })
            })
        
        case CHANGE_COMPLETED:
            return Object.assign({}, state, {
                chooseAllChecked: action.body.completed,
                items: state.items.map((item) => {
                    if (item.id === action.body.id) {
                        return Object.assign({}, item, {
                            completed: !item.completed
                        })
                    }
                    return item
                })
            })
        
        case CHANGE_EDITING:
            return Object.assign({}, state, { 
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        return Object.assign({}, item, {
                            editing: !item.editing
                        })
                    }
                    return item
                })
            })
        
        case SHOW_MODAL:
            return Object.assign({}, state, {
                modal: !state.modal,
                deleteManyItems: action.deleteManyItems,
                itemIdToBeDeleted: action.itemIdToBeDeleted
            })

        case CONFIRM_MODAL:
            return Object.assign({}, state, {
                items: state.itemIdToBeDeleted !== null ?
                state.items.filter((item) => (item.id !== state.itemIdToBeDeleted)) :
                state.items.filter((item) => (item.completed !== true)),
                modal: false
            })

        default:
            return state
    }
}

export default store
