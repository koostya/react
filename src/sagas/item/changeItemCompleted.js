import { put, takeEvery, call } from 'redux-saga/effects'
import { changeItemCompletedAPI } from '../../API/item/changeItemCompleted'

export function* changeItemCompleted(action) {
    try {
        const body = yield call(changeItemCompletedAPI, action.data.id, action.data.completed, action.data.text)
        yield put({type: "CHANGE_COMPLETED", payload: {body}})
    } catch(error) {}
}

export function* changeItemCompletedWatch() {
    yield takeEvery('CHANGE_COMPLETED_W', changeItemCompleted)
}
