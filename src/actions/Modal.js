import { send } from '../utils/fetch'
import { history } from '../index'
import { 
    SHOW_MODAL,
    CONFIRM_MODAL
} from './CONSTS'

export function showModal(deleteManyItems, itemIdToBeDeleted) {
    return {
        type: SHOW_MODAL,
        deleteManyItems,
        itemIdToBeDeleted
    }
}

export function confirmModal() {
    return {
        type: CONFIRM_MODAL
    }
}