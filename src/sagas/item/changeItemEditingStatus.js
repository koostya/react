import { put, takeEvery } from 'redux-saga/effects'

export function* changeItemEditingStatus(action) {
    try {
        yield put({type: "CHANGE_EDITING", id: action.data.id})
    } catch(error) {}
}

export function* changeItemEditingStatusWatch() {
    yield takeEvery('CHANGE_EDITING_W', changeItemEditingStatus)
}
