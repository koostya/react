import {
    LOGOUT
} from '../../actions/CONSTS'

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