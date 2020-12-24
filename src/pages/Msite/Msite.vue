<template>
    <div class="msite">
         <HeaderTop :title="address.name" >
               <span class="header_search" slot="left">
              <i class="iconfont icon-search"></i>
             </span>

            <span class="header_login" slot="right">
            <span class="header_login_text" @click="$router.replace('/login')">登录|注册</span>
          </span>
         </HeaderTop>
        <div class="miste-content-wrapper">
            <div class="miste-content">
           <nav class="msite_nav">
          <div class="swiper-container" v-if="newCategorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in newCategorys" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              
              </div>
         
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList />
        </div>
        </div>
        </div>
        
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState,mapActions} from 'vuex'
import Swiper from 'swiper'
import 'swiper/swiper.min.css'

import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  data(){
     return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
  },
    components:{
        HeaderTop,
        ShopList
    },
    mounted() {
      this.getShops()
    },
    methods: {
      ...mapActions(['getShops'])
    },
    watch:{
      categorys(val){
           this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
           
          })

      }
      
    },
    computed:{
      ...mapState(['categorys','address']),
      newCategorys(){
        let arr=[] 
        let miniArr=[] 
        const {categorys} = this 
        categorys.forEach(item=>{
          if(miniArr.length===8){
            miniArr=[] 
          }

          if(miniArr.length===0){
            arr.push(miniArr)
          }

          miniArr.push(item)
        })
        return arr
      }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

   .msite  //首页
    width 100%
    .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
    .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            .shop_container
              margin-bottom 50px
              height: 300px
              overflow: auto
              
</style>