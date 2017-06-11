/*
 * @Author: xiaoshan 
 * @Date: 2017-06-11 17:52:34 
 * @Last Modified by: xiaoshan
 * @Last Modified time: 2017-06-11 20:38:16
 */
import axios from 'axios'
import store from './store/store.js'
import * as types from './store/types.js'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:56335/api/';

export default axios;
