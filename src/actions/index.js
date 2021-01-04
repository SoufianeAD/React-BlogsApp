import {CREATE_BLOG, DELETE_BLOG, FETCH_BLOG, FETCH_BLOGS} from "./Types";
import ReduxBlogAPI from "../apis/ReduxBlogAPI";

const KEY_API = '?key=1234567891011';

export const fetchBlogs = () => async (dispatch) => {
    const { data } = await ReduxBlogAPI.get(`/posts/${KEY_API}`);
    dispatch({ type: FETCH_BLOGS, payload: data });
}

export const fetchBlog = (id) => async (dispatch) => {
    const { data } = await ReduxBlogAPI.get(`/posts/${id}`);
    dispatch({ type: FETCH_BLOG, payload: data });
}

export const createBlog = (formValues, callBack) => async (dispatch) => {
    const { data } = await ReduxBlogAPI.post(`/posts/${KEY_API}`, {...formValues, 'id': ''});
    dispatch({ type: CREATE_BLOG, payload: data });
    callBack();
}

export const deleteBlog = (id, history) => async (dispatch) => {
    await ReduxBlogAPI.delete(`/posts/${id}`);
    dispatch({ type: DELETE_BLOG, payload: id });
    history.push('/');
}

