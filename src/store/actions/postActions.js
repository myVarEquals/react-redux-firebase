export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const fire = getFirestore();
        fire.collection('posts').add({
            ...post,
            authorFirstName: 'Roger',
            authorLastName: 'Baker',
            userId: '6039486',
            timestamp: new Date().toString()
        }).then(() => {
                dispatch({type: 'CREATE_POST', post})
        }).catch((err) => {
                dispatch({type: 'CREATE_POST_ERROR', err});
        });
    }        
}