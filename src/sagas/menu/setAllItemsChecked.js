import { put, takeEvery, call } from 'redux-saga/effects'
import { setAllItemsCheckedAPI } from '../../API/menu/setAllItemsChecked'
import { SET_ALL_ITEMS_CHECKED } from '../../consts/CONSTS'

export function* setAllItemsChecked(action) {
    try {
        yield put({type: SET_ALL_ITEMS_CHECKED.REQUEST})        
        const body = yield call(setAllItemsCheckedAPI, action.data.allChecked)
        yield put({type: SET_ALL_ITEMS_CHECKED.SUCCESS, payload: {body}})
    } catch(error) {
        yield put({type: SET_ALL_ITEMS_CHECKED.ERROR})                
    }
}

export function* setAllItemsCheckedWatch() {
    yield takeEvery('SET_ALL_ITEMS_CHECKED_W', setAllItemsChecked)
}


