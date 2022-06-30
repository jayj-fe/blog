<template>
    <div class="app-con app-view-page">
        <div v-html="currentView" id="post-wrapper" class="post-content"></div>
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
        ...mapState([ 'currentView' ])
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
