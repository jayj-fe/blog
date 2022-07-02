<template>
  <div class="app">
    <router-view name="header"/>
    <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition name="fade">
          <component :is="Component" />
        </transition> 
    </router-view>
		<router-view name="footer"/>  
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
    ...mapActions([ 'toggleHeader' ]),
    handleResize() {
        this.width = window.innerWidth;

        if( this.width >= 1024){
          this.toggleHeader(true);
        }else{
          this.toggleHeader(false);
        }
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
}
</script>

<style>
</style>
