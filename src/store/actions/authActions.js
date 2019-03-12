export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const fire = getFirebase();
        fire.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'LOGIN_FAIL', err});
        });
    }
}