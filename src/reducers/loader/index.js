import {
    SHOW_LOADER,
    HIDE_LOADER
} from '../../consts/CONSTS'

const initialState = {
    loader: false
}

export default function loader(state = initialState, action) {
    switch(action.type) {

        case SHOW_LOADER:
            return Object.assign({}, state, {
                loader: true
            })
        
        case HIDE_LOADER:
            return Object.assign({}, state, {
                loader: false
            })
            
        default:
            return state
    }
}