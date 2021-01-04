import axios from 'axios';

export default axios.create({
    baseURL: 'http://reduxblog.herokuapp.com/api'
});