import {
    LOGOUT
} from '../../actions/actions'

const initialState = {
    user: '',
    password: ''
}

export default function logout(state = initialState, action) {
    switch(action.type) {

        case LOGOUT:
            return Object.assign({}, state, {
                user: '',
                password: ''
            })
        
        default:
            return state
    }
}