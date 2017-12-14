import {
    REGISTRATION,
    REGISTRATION_ERR
} from '../../CONSTS/CONSTS'

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
                user: action.payload.body.nickname,
                userAlreadyExist: action.payload.body.userAlreadyExist
            })
            
        default:
            return state
    }
}