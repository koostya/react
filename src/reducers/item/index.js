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
} from '../../consts/CONSTS'

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

        case REMOVE_ITEMS_ON_CONFIRM_MODAL.SUCCESS:
            return Object.assign({}, state, {
                items: action.itemIdToBeDeleted !== null ?
                state.items.filter((item) => (item.id !== state.itemIdToBeDeleted)) :
                state.items.filter((item) => (item.completed !== true))
            })

        case SET_ALL_ITEMS_CHECKED.SUCCESS:
            return Object.assign({}, state, {
                items: state.items.map((item) => {
                    if (item.completed !== action.payload.body.allChecked) {
                        return Object.assign({}, item, {
                            completed: action.payload.body.allChecked
                        })
                    }
                    return item
                }),
                chooseAllChecked: action.payload.body.allChecked,
            })

        case GET_ALL_ITEMS:
            return Object.assign({}, state, {
                items: action.body
            })
    
        case GET_ITEMS_FOR_USER.SUCCESS:
            return Object.assign({}, state, {
                items: action.payload.body.items,
                user: action.payload.body.name
            })

        case ADD_ITEM.SUCCESS:
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    {
                        text: action.payload.body.text,
                        completed: action.payload.body.completed,
                        id: action.payload.body.id,
                        editing: action.payload.body.editing,
                        userName: action.payload.body.userName
                    }
                ],
                user: action.payload.body.userName
            })

        case UPDATE_ITEM.SUCCESS:
            return Object.assign({}, state, { 
                items: state.items.map((item) => {
                    if (item.id === action.payload.body.id) {
                        return Object.assign({}, item, {
                            text: action.payload.body.text
                        })
                    }
                    return item
                })
            })

        case CHANGE_COMPLETED.SUCCESS:
            return Object.assign({}, state, {
                chooseAllChecked: action.payload.body.completed,
                items: state.items.map((item) => {
                    if (item.id === action.payload.body.id) {
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