import {
    REGISTRATION
} from '../../consts/CONSTS'

const initialState = {
    user: '',
    password: ''
}

export default function registration(state = initialState, action) {
    switch(action.type) {

        case REGISTRATION.ERROR:
            return Object.assign({}, state, {
                userAlreadyExist: action.body.userAlreadyExist,
                user: action.body.nickname,
                surname: action.body.surname,
                phone: action.body.phone,
                password: action.body.password
            })

        case REGISTRATION.SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.body.nickname,
                userAlreadyExist: action.payload.body.userAlreadyExist
            })
            
        default:
            return state
    }
}