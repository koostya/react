import {
    SUBMIT_FORM_ERR,
    SUBMIT_FORM
} from '../../actions/CONSTS'

const initialState = {
    user: '',
    password: ''
}

export default function login(state = initialState, action) {
    switch(action.type) {

        case SUBMIT_FORM_ERR:
            return Object.assign({}, state, {
                noUserWasFound: action.body.noUserWasFound,
                user: action.body.name,
                password: action.body.password
            })

        case SUBMIT_FORM:
            return Object.assign({}, state, {
                items: action.payload.body.items,
                logged: action.payload.body.logged,
                user: action.payload.body.name,
                noUserWasFound: action.payload.body.noUserWasFound
            })
            
        default:
            return state
    }
}