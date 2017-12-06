export const isUserAuthorized = (nextState, replace) => {
    const isUser = localStorage.getItem('login')
    
    if (isUser) {
        // replace('/list')
        return true
    } else {     
        // replace('/login')
        return false
    }
}