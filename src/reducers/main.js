import {
    ADD_ITEM,
    REMOVE_ITEM,
    SET_FILTER,
    Filters
} from '../actions/actions';

const initialState = {
    filter: Filters.ALL,
    items: []
};

function app(state = initialState, action) {
    switch(action.type) {
        case SET_FILTER:
            return Object.assign({}, state, {
                Filters: action.filter
            })
        
        case ADD_ITEM:
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    {
                        text: action.text,
                        completed: false,
                        id: action.id
                    }
                ]
            })

        default: 
            return state
    }
}