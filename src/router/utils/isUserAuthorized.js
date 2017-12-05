export const isUserAuthorized = () => {
    const isUser = localStorage.getItem('login')
    
    if (isUser) {
        return true
    } else {     
        return false
    }
}