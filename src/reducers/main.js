import { combineReducers } from 'redux'
import registration from './registration/index'
import login from './login/index'
import modal from './modal/index'
import item from './item/index'
import logout from './logout/index'
import menu from './menu/index'
import filter from './filter/index'
import { routerReducer } from 'react-router-redux'

export const reducer = combineReducers({
    registration,
    login,
    modal,
    item,
    logout,
    menu,
    filter,
    router: routerReducer
})
