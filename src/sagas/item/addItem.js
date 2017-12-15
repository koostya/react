import { put, takeEvery, call } from 'redux-saga/effects'
import { addItemAPI } from '../../API/item/addItem'
import {
    ADD_ITEM
} from '../../consts/CONSTS'

export function* addItem(action) {
    try {
        yield put({type: ADD_ITEM.REQUEST})
        const body = yield call(addItemAPI, action.data.id, action.data.text, action.data.completed, action.data.editing, action.data.userName)
        yield put({type: ADD_ITEM.SUCCESS, payload: {body}})
    } catch(error) {
        yield put({type: ADD_ITEM.ERROR})
    }
}

export function* addItemWatch() {
    yield takeEvery('ADD_ITEM_W', addItem)
}


