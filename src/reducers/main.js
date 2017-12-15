import { combineReducers } from 'redux'
import registration from './registration/index'
import login from './login/index'
import modal from './modal/index'
import item from './item/index'
import logout from './logout/index'
import filter from './filter/index'
import loader from './loader/index'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

export const reducer = combineReducers({
    registration,
    login,
    modal,
    item,
    logout,
    filter,
    loader,
    router: routerReducer,
    form: reduxFormReducer
})
