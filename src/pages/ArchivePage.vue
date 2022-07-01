<template>
    <div class="app-con app-archive-page">
        app-archive-page
        {{ currentPosts }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
import "@/assets/scss/archive.scss";
export default {
    name: 'ArchivePage',
	computed: {
		...mapState([ 'currentPosts' ]),
	}
}
</script>

<style scoped>
</style>
