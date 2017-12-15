import { put, takeEvery, call } from 'redux-saga/effects'
import {
    ADD_ITEM,
    SUBMIT_FORM,
    REGISTRATION,
    GET_ITEMS_FOR_USER,
    SET_ALL_ITEMS_CHECKED,
    REMOVE_ITEMS_ON_CONFIRM_MODAL,
    CHANGE_COMPLETED,
    UPDATE_ITEM
} from '../../consts/CONSTS'

export function* loader(action) {
    if (action.type.indexOf('REQUEST') !== -1) {
        yield put({type: "SHOW_LOADER"})
    } else if (action.type.indexOf('SUCCESS') !== -1) {
        yield put({type: "HIDE_LOADER"})
    } else if (action.type.indexOf('ERROR') !== -1) {
        yield put({type: "HIDE_LOADER"})
    }
}

export function* loaderWatch() {
    yield takeEvery([
        'ADD_ITEM_W',
        ADD_ITEM.REQUEST,
        ADD_ITEM.SUCCESS,
        ADD_ITEM.ERROR,
        'SUBMIT_FORM_W',
        SUBMIT_FORM.REQUEST,
        SUBMIT_FORM.SUCCESS,
        SUBMIT_FORM.ERROR,
        'REGISTRATION_W',
        REGISTRATION.REQUEST,
        REGISTRATION.SUCCESS,
        REGISTRATION.ERROR,
        'GET_ITEMS_FOR_USER_W',
        GET_ITEMS_FOR_USER.REQUEST,
        GET_ITEMS_FOR_USER.SUCCESS,
        GET_ITEMS_FOR_USER.ERROR,
        'SET_ALL_ITEMS_CHECKED_W',
        SET_ALL_ITEMS_CHECKED.REQUEST,
        SET_ALL_ITEMS_CHECKED.SUCCESS,
        SET_ALL_ITEMS_CHECKED.ERROR,
        'REMOVE_ITEMS_ON_CONFIRM_MODAL_W',
        REMOVE_ITEMS_ON_CONFIRM_MODAL.REQUEST,
        REMOVE_ITEMS_ON_CONFIRM_MODAL.SUCCESS,
        REMOVE_ITEMS_ON_CONFIRM_MODAL.ERROR,
        'CHANGE_COMPLETED_W',
        CHANGE_COMPLETED.REQUEST,
        CHANGE_COMPLETED.SUCCESS,
        CHANGE_COMPLETED.ERROR,
        'UPDATE_ITEM_W',
        UPDATE_ITEM.REQUEST,
        UPDATE_ITEM.SUCCESS,
        UPDATE_ITEM.ERROR
    ], loader)
}


