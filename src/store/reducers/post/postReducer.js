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
    return state;
}

export default postReducer;