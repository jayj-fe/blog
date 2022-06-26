<template>
  <div class="app-list">
    <ul class="app-list__container">
      <li v-for="postItem in currentPosts" v-bind:key="postItem" class="list-item">
        <span v-for="categoriesItem in postItem.categories" v-bind:key="categoriesItem" class="list-item__categorie">
          {{ categoriesItem }}
        </span>
        <a href="#" class="list-item__title">{{ postItem.title }}</a>
        <p class="list-item__date">{{ postItem.date }}</p>
        <p class="list-item__con">{{ postItem.con }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import "@/assets/scss/list.scss";

export default {
  name: 'AppList',
	computed: {
		...mapState([ 'currentPosts' ]),
	}
}
</script>
<style scoped>
</style>
