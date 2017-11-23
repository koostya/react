import {
    ADD_ITEM,
    REMOVE_ITEM,
    SET_FILTER,
    SET_ALL_CHECKED,
    CHANGE_COMPLETED,
    CHANGE_EDITING,
    UPDATE_ITEM,
    SHOW_MODAL
} from '../actions/actions';

const initialState = {
    filter: 'ALL',
    items: [{
        text: 'ewf',
        id: 234,
        completed: false,
        editing: false,
        showModal: false
    }],
    chooseAllChecked: false
};

function store(state = initialState, action) {
    switch(action.type) {

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
                items: state.items.filter((item, i, arr) => (item.id !== action.id))
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
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        return Object.assign({}, item, {
                            showModal: !item.showModal
                        })
                    }
                    return item
                })
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