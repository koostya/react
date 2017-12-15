import { put, takeEvery, call } from 'redux-saga/effects'
import { changeItemCompletedAPI } from '../../API/item/changeItemCompleted'
import { CHANGE_COMPLETED } from '../../consts/CONSTS'

export function* changeItemCompleted(action) {
    try {
        yield put({type: CHANGE_COMPLETED.REQUEST})        
        const body = yield call(changeItemCompletedAPI, action.data.id, action.data.completed, action.data.text)
        yield put({type: CHANGE_COMPLETED.SUCCESS, payload: {body}})
    } catch(error) {
        yield put({type: CHANGE_COMPLETED.ERROR})                
    }
}

export function* changeItemCompletedWatch() {
    yield takeEvery('CHANGE_COMPLETED_W', changeItemCompleted)
}
