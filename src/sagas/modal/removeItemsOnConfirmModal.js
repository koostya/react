import { put, takeEvery, call } from 'redux-saga/effects'
import { removeItemsOnConfirmModalAPI } from '../../API/item/removeItemsOnConfirmModal'
import { REMOVE_ITEMS_ON_CONFIRM_MODAL } from '../../consts/CONSTS'

export function* removeItemsOnConfirmModal(action) {
    try {
        yield put({type: REMOVE_ITEMS_ON_CONFIRM_MODAL.REQUEST})        
        yield call(removeItemsOnConfirmModalAPI, action.data.itemIdToBeDeleted, action.data.deleteManyItems, action.data.user)
        yield put({type: REMOVE_ITEMS_ON_CONFIRM_MODAL.SUCCESS, itemIdToBeDeleted: action.data.itemIdToBeDeleted})
        yield put({type: "CONFIRM_MODAL"})
    } catch(error) {
        yield put({type: REMOVE_ITEMS_ON_CONFIRM_MODAL.ERROR})                
    }
}

export function* removeItemsOnConfirmModalWatch() {
    yield takeEvery('REMOVE_ITEMS_ON_CONFIRM_MODAL_W', removeItemsOnConfirmModal)
}
