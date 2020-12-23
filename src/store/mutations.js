import {
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLISTS
} from './mutation-type'

export default{
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPLISTS](state,{shopLists}){
        state.shopLists = shopLists
    }
}