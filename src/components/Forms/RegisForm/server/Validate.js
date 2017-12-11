import { send } from '../../../../utils/fetch'

const asyncValidate = (values, dispatch, props, field) => {
    return fetch('http://localhost:3001/users/new', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: values.nickname
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if (Boolean(json.userWithSuchNickIsDefined)) {
                throw { nickname: 'This nickname is already taken' }
            }
        })
}

export default asyncValidate