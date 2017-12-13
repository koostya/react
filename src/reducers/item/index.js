import {
    GET_ALL_ITEMS,
    GET_ITEMS_FOR_USER,
    ADD_ITEM,
    UPDATE_ITEM,
    CHANGE_COMPLETED,
    CHANGE_EDITING,
    SET_ALL_ITEMS_CHECKED,
    REMOVE_ITEMS_ON_CONFIRM_MODAL,
    SET_LIST_OF_USERS
} from '../../actions/CONSTS'

const initialState = {
    items: [],
    user: '',
    chooseAllChecked: false,
    users: []
}

export default function item(state = initialState, action) {
    switch(action.type) {

        case SET_LIST_OF_USERS:
            return Object.assign({}, state, {
                users: action.payload.users
            })

        case REMOVE_ITEMS_ON_CONFIRM_MODAL:
            return Object.assign({}, state, {
                items: action.body.itemIdToBeDeleted !== null ?
                state.items.filter((item) => (item.id !== state.itemIdToBeDeleted)) :
                state.items.filter((item) => (item.completed !== true))
            })

        case SET_ALL_ITEMS_CHECKED:
            return Object.assign({}, state, {
                items: state.items.map((item) => {
                    if (item.completed !== action.body.allChecked) {
                        return Object.assign({}, item, {
                            completed: action.body.allChecked
                        })
                    }
                    return item
                }),
                chooseAllChecked: action.body.allChecked,
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
        
        default:
            return state
    }
}