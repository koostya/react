import { put, takeEvery, call } from 'redux-saga/effects'
import { addItemAPI } from '../../API/item/addItem'

export function* addItem(action) {
    try {
        const body = yield call(addItemAPI, action.data.id, action.data.text, action.data.completed, action.data.editing, action.data.userName)
        yield put({type: "ADD_ITEM", payload: {body}})
    } catch(error) {}
}

export function* addItemWatch() {
    yield takeEvery('ADD_ITEM_W', addItem)
}


