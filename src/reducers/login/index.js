import {
    SUBMIT_FORM_ERR,
    SUBMIT_FORM
} from '../../consts/CONSTS'

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

        case SUBMIT_FORM.SUCCESS:
            return Object.assign({}, state, {
                items: action.payload.items,
                logged: action.payload.logged,
                user: action.payload.name,
                noUserWasFound: action.payload.noUserWasFound
            })
            
        default:
            return state
    }
}