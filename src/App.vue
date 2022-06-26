<template>
  <div class="app">
    <router-view name="header"/>
    <router-view />
		<router-view name="footer"/>
    
<!--       
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
        <component :is="Component" />
        </transition> 
      </router-view> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
      return {
          width: 0
      }
  },
  methods: {
    ...mapActions([ 'fetchPostList', 'toggleHeader' ]),
    handleResize() {
        this.width = window.innerWidth;

        if( this.width >= 768){
          this.toggleHeader(true);
        }else{
          this.toggleHeader(false);
        }
    }
  },
  mounted(){
    this.fetchPostList('post');
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
}
</script>

<style>
</style>
