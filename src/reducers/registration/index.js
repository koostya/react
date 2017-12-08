import {
    REGISTRATION,
    REGISTRATION_ERR
} from '../../actions/CONSTS'

const initialState = {
    user: '',
    password: ''
}

export default function registration(state = initialState, action) {
    switch(action.type) {

        case REGISTRATION_ERR:
            return Object.assign({}, state, {
                userAlreadyExist: action.body.userAlreadyExist,
                user: action.body.nickname,
                surname: action.body.surname,
                phone: action.body.phone,
                password: action.body.password
            })

        case REGISTRATION:
            return Object.assign({}, state, {
                user: action.body.nickname,
                userAlreadyExist: action.body.userAlreadyExist
            })
            
        default:
            return state
    }
}