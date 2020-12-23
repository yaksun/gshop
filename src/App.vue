<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted() {
    this.getGoodCategorys()
  },
  methods: {
    ...mapActions(['getGoodCategorys'])
  },
}
</script>

<style>

</style>
