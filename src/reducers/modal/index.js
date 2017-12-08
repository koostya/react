import {
    SHOW_MODAL,
    CONFIRM_MODAL
} from '../../actions/CONSTS'

const initialState = {
    deleteManyItems: false,
    modal: false,
    itemIdToBeDeleted: 234
}

export default function modal(state = initialState, action) {
    switch(action.type) {

        case SHOW_MODAL:
            return Object.assign({}, state, {
                modal: !state.modal,
                deleteManyItems: action.deleteManyItems,
                itemIdToBeDeleted: action.itemIdToBeDeleted
            })

        case CONFIRM_MODAL:
            return Object.assign({}, state, {
                modal: false
            })
        
        default:
            return state
    }
}