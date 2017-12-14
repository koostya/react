import { put, takeEvery, call } from 'redux-saga/effects'
import { upadateItemAPI } from '../../API/item/updateItem'

export function* upadateItem(action) {
    try {
        const body = yield call(upadateItemAPI, action.data.id, action.data.completed, action.data.text)
        yield put({type: "UPDATE_ITEM", payload: {body}})
    } catch(error) {}
}

export function* upadateItemWatch() {
    yield takeEvery('UPDATE_ITEM_W', upadateItem)
}


