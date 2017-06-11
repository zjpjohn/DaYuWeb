/*
 * @Author: xiaoshan 
 * @Date: 2017-06-11 09:48:21 
 * @Last Modified by: xiaoshan
 * @Last Modified time: 2017-06-11 21:25:20
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        token: null
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data
        },
        [types.LOGOUT]: (state, data) => {
            localStorage.removeItem('token');
            state.token = data;
        },
        [types.USER]: (state, data) => {
            state.user = data
        }
    }
})
