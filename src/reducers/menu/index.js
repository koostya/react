import {
    SET_ALL_CHECKED
} from '../../actions/actions'

const initialState = {
    items: [],
    chooseAllChecked: false
}

export default function filter(state = initialState, action) {
    switch(action.type) {

        case SET_ALL_CHECKED:
            return Object.assign({}, state, {
                chooseAllChecked: action.body.allChecked,
                items: state.items.map((item) => {
                    if (item.completed !== action.body.allChecked) {
                        return Object.assign({}, item, {
                            completed: action.body.allChecked
                        })
                    }
                    return item
                })
            })
        
        default:
            return state
    }
}