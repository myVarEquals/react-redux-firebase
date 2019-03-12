const initialState = {
    posts: [
        {
            id: '34po65',
            title: 'Hello',
            content: 'loremloremloremloremloremloremloremloremloremloremloremlorem'
        },
        {
            id: '34345673',
            title: 'Hello',
            content: 'loremloremloremloremloremloremloremloremloremloremloremlorem'
        },
        {
            id: '34634635',
            title: 'Hello',
            content: 'loremloremloremloremloremloremloremloremloremloremloremlorem'
        }
    ]
    
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            console.log('created', action.post);
            return state;
        case 'CREATE_POST_ERROR':
            console.log('Error trying to create post! See - ', action.err);
            return state;
        default:
            return state;
    }
}

export default postReducer;