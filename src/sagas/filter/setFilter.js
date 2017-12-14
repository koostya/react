import { put, takeEvery } from 'redux-saga/effects'

export function* setFilter(action) {
    try {
        yield put({type: "SET_FILTER", filter: action.data.filter})
    } catch(error) {}
}

export function* setFilterWatch() {
    yield takeEvery('SET_FILTER_W', setFilter)
}


