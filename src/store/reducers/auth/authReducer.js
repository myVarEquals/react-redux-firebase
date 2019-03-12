const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_FAIL':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login  failed'
            }
        default:
            return state;
    }
}

export default authReducer;