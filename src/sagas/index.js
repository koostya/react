import { all, takeEvery, fork } from 'redux-saga/effects'

import { testWrap } from './testSaga'
import { loginWatch } from './login'

export default function* rootSaga() {
    yield all([
        testWrap(),
        loginWatch()
    ])
}