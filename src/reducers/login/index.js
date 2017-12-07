import {
    SUBMIT_FORM_ERR,
    SUBMIT_FORM
} from '../../actions/actions'

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
                items: action.body.items,
                logged: action.body.logged,
                user: action.body.name,
                noUserWasFound: action.body.noUserWasFound
            })
            
        default:
            return state
    }
}