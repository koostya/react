import { send } from '../utils/fetch'
import { history } from '../index'
import { 
    SET_FILTER
} from './CONSTS'

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}