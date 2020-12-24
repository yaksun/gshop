import {
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api'
import {
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPLISTS,
    RECEIVE_ADDRESS
} from './mutation-type'


export default{
    async getAddress({commit,state}){
        const res = await reqAddress(state.latitude+','+state.longitude)
        if(res.code === 0){
            commit(RECEIVE_ADDRESS,{address:res.data})
        }
    },

    async getGoodCategorys({commit,state}){
        const res = await reqFoodCategorys()
           
        if(res.code === 0){
            commit(RECEIVE_CATEGORYS,{categorys:res.data})
        }
    },
     async getShops({commit,state}){
        const res = await reqShops(state.longitude,state.latitude)

        if(res.code === 0){
            commit(RECEIVE_SHOPLISTS,{shopLists:res.data})
        }
    }
}