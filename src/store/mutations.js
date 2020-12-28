import {
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLISTS,
    RECEIVE_ADDRESS,
    RECEIVE_USERINFO
} from './mutation-type'

export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPLISTS](state,{shopLists}){
        state.shopLists = shopLists
    },
    [RECEIVE_USERINFO](state,{userInfo}){
        state.userInfo=userInfo
    }
}