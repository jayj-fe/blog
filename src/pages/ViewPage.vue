<template>
    <div  id="post-wrapper" class="app-con app-view-page post-content">
        <h1>{{ postTit }}</h1>
        <p class="post-content__date">{{ postDate }}</p>
        <div v-html="currentView"></div>
    </div>
</template>

<script>
import "@/assets/scss/view.scss";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'ViewPage',
    data() {
        return {
            postTit : null,
            postDate : null
        }
    },
    props: {
        posttitle: {
            type: String
        },
        
        postdate: {
            type: String
        },

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

        this.postTit = this.posttitle;
        this.postDate = this.postdate;
    }
}
</script>

<style scoped>
</style>
