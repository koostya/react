import { put, takeEvery } from 'redux-saga/effects'

export function* showDeleteModal(action) {
    try {
        let body = {
            deleteManyItems: action.data.deleteManyItems,
            itemIdToBeDeleted: action.data.itemIdToBeDeleted
        }
        yield put({type: "SHOW_MODAL", payload: {body}})
    } catch(error) {}
}

export function* showDeleteModalWatch() {
    yield takeEvery('SHOW_MODAL_W', showDeleteModal)
}


