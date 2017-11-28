import {
    ADD_ITEM,
    REMOVE_ITEM,
    SET_FILTER,
    SET_ALL_CHECKED,
    CHANGE_COMPLETED,
    CHANGE_EDITING,
    UPDATE_ITEM,
    SHOW_MODAL,
    MULTIPLE_DELITING,
    CONFIRM_MODAL,
    GET_ALL_ITEMS
} from '../actions/actions';

const initialState = {
    filter: 'ALL',
    items: [],
    chooseAllChecked: false,
    deleteManyItems: false,
    modal: false,
    itemIdToBeDeleted: 234
};

function store(state = initialState, action) {
    switch(action.type) {

        case GET_ALL_ITEMS:
            return Object.assign({}, state, {
                items: action.items
            })

        case SET_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            })

        case SET_ALL_CHECKED:
            return Object.assign({}, state, {
                chooseAllChecked: action.allChecked,
                items: state.items.map((item) => {
                    if (item.completed !== action.allChecked) {
                        return Object.assign({}, item, {
                            completed: action.allChecked
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
                        text: action.text,
                        completed: action.completed,
                        id: action.id,
                        editing: action.editing
                    }
                ]
            })

        case REMOVE_ITEM:
            return Object.assign({}, state, { 
                items: state.items.filter((item, i, arr) => (item.id !== action.id)),
                deleteManyItems: action.deleteManyItems
            })

        case UPDATE_ITEM:
            return Object.assign({}, state, { 
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        return Object.assign({}, item, {
                            text: action.text
                        })
                    }
                    return item
                })
            })
        
        case CHANGE_COMPLETED:
            return Object.assign({}, state, {
                chooseAllChecked: action.check,
                items: state.items.map((item) => {
                    if (item.id === action.id) {
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

        case MULTIPLE_DELITING:
            return Object.assign({}, state, {
                deleteManyItems: action.deleteManyItems
            })

        default:
            return state
    }
}

import {combineReducers} from 'redux';

const app = combineReducers({
    store
});

export default app;