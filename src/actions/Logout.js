import { send } from '../utils/fetch'
import { history } from '../index'
import { 
    LOGOUT
} from './CONSTS'

export function logout() {
    localStorage.clear()

    history.push('/login')  

    return {
        type: LOGOUT
    }
}