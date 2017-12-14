import { put, takeEvery, call } from 'redux-saga/effects'
import { removeItemsOnConfirmModalAPI } from '../../API/item/removeItemsOnConfirmModal'

export function* removeItemsOnConfirmModal(action) {
    try {
        yield call(removeItemsOnConfirmModalAPI, action.data.itemIdToBeDeleted, action.data.deleteManyItems, action.data.user)
        yield put({type: "REMOVE_ITEMS_ON_CONFIRM_MODAL", itemIdToBeDeleted: action.data.itemIdToBeDeleted})
        yield put({type: "CONFIRM_MODAL"})
    } catch(error) {}
}

export function* removeItemsOnConfirmModalWatch() {
    yield takeEvery('REMOVE_ITEMS_ON_CONFIRM_MODAL_W', removeItemsOnConfirmModal)
}
