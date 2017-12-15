import { all } from 'redux-saga/effects'

import { loginWatch } from './login/login'
import { regisWatch } from './registration/registration'
import { appLoadWatch } from './initial/appLoad'
import { addItemWatch } from './item/addItem'
import { setAllItemsCheckedWatch } from './menu/setAllItemsChecked'
import { changeItemCompletedWatch } from './item/changeItemCompleted'
import { upadateItemWatch } from './item/updateItem'
import { changeItemEditingStatusWatch } from './item/changeItemEditingStatus'
import { showDeleteModalWatch } from './modal/showDeleteModal'
import { setFilterWatch } from './filter/setFilter'
import { removeItemsOnConfirmModalWatch } from './modal/removeItemsOnConfirmModal'
import { logoutWatch } from './logout/logout'
import { loaderWatch } from './loader/index'

export default function* rootSaga() {
    yield all([
        loginWatch(),
        regisWatch(),
        appLoadWatch(),
        addItemWatch(),
        setAllItemsCheckedWatch(),
        changeItemCompletedWatch(),
        upadateItemWatch(),
        changeItemEditingStatusWatch(),
        showDeleteModalWatch(),
        setFilterWatch(),
        removeItemsOnConfirmModalWatch(),
        logoutWatch(),
        loaderWatch()
    ])
}