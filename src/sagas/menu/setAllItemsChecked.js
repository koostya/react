import { put, takeEvery, call } from 'redux-saga/effects'
import { setAllItemsCheckedAPI } from '../../API/menu/setAllItemsChecked'

export function* setAllItemsChecked(action) {
    try {
        const body = yield call(setAllItemsCheckedAPI, action.data.allChecked)
        yield put({type: "SET_ALL_ITEMS_CHECKED", payload: {body}})
    } catch(error) {}
}

export function* setAllItemsCheckedWatch() {
    yield takeEvery('SET_ALL_ITEMS_CHECKED_W', setAllItemsChecked)
}


