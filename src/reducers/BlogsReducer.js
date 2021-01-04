import {FETCH_BLOGS, FETCH_BLOG, CREATE_BLOG, DELETE_BLOG} from "../actions/Types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_BLOG:
            return _.omit(state, action.payload.id);
        default:
            return state;
    }
}