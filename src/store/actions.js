import {
    reqFoodCategorys,
    reqShops
} from '../api'
import {
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLISTS
} from './mutation-type'


export default{
    async getGoodCategorys({commit,state}){
        const res = await reqFoodCategorys()
           
        if(res.code === 0){
            commit(RECEIVE_CATEGORYS,{categorys:res.data})
        }
    },
     async getShops({commit,state}){
        const res = await reqShops()

        if(res.code === 0){
            commit(RECEIVE_SHOPLISTS,res.data)
        }
    }
}