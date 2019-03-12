import authReducer from '../auth/authReducer';
import postReducer from '../post/postReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    authReducer, 
    postReducer,
    firestoreReducer,
    firebaseReducer
});

export default rootReducer;