import { combineReducers } from "redux";
import BlogsReducer from "./BlogsReducer"
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    blogs: BlogsReducer,
    form: formReducer
});