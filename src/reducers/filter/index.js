import {
    SET_FILTER
} from '../../actions/CONSTS'

const initialState = {
    filter: 'ALL'
}

export default function filter(state = initialState, action) {
    switch(action.type) {

        case SET_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            })
        
        default:
            return state
    }
}