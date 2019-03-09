import authReducer from '../auth/authReducer';
import postReducer from '../post/postReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    authReducer, 
    postReducer
});

export default rootReducer;