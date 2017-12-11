import { send } from '../../../../utils/fetch'

const asyncValidate = (values, dispatch, props, field) => {
    return fetch('http://localhost:3001/users/nickname', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: values.nickname,
                password: values.password
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if (Boolean(json.userWithSuchNickIsNotDefined)) {
                throw { nickname: '' }
            }
            if(Boolean(json.userWithSuchPasswordIsNotDefined)) {
                throw { password: '' }
            }
        })
}

export default asyncValidate