import authReducer from '../auth/authReducer';
import postReducer from '../post/postReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    authReducer, 
    postReducer,
    firestoreReducer
});

export default rootReducer;