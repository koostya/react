import { put, takeEvery, call } from 'redux-saga/effects'
import { upadateItemAPI } from '../../API/item/updateItem'
import { UPDATE_ITEM } from '../../consts/CONSTS'

export function* upadateItem(action) {
    try {
        yield put({type: UPDATE_ITEM.REQUEST})        
        const body = yield call(upadateItemAPI, action.data.id, action.data.completed, action.data.text)
        yield put({type: UPDATE_ITEM.SUCCESS, payload: {body}})
    } catch(error) {
        yield put({type: UPDATE_ITEM.ERROR})                
    }
}

export function* upadateItemWatch() {
    yield takeEvery('UPDATE_ITEM_W', upadateItem)
}


