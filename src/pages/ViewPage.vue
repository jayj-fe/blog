<template>
    <div id="post-wrapper" class="app-con app-view-page post-content">
        <h1>{{ currentViewTitle }}</h1>
        <p class="post-content__date">{{ currentViewDate }}</p>
        <div v-html="currentViewContent"></div>
    </div>
</template>

<script>
import "@/assets/scss/view.scss";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'ViewPage',
    props: {
        postURL: {
            type: String,
            default: "",
        }
    },
    computed: {
        ...mapState([ 'currentViewTitle', 'currentViewDate', 'currentViewContent' ])
    },
    methods: {
        ...mapActions([ 'fetchPostView' ]),
    },
    mounted() {
        this.fetchPostView(this.postURL);
    }
}
</script>

<style scoped>
</style>
