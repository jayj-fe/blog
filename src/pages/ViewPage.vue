<template>
    <div id="post-wrapper" class="app-con app-view-page post-content">
        <h1>{{ currentView.title }}</h1>
        <p class="post-content__date">{{ currentView.date }}</p>
        <div v-html="currentView.content"></div>
    </div>
</template>

<script>
import "@/assets/scss/view.scss";
// import { mapState, mapActions } from 'vuex';
import showdown from "showdown";
import { mapActions } from 'vuex';
export default {
    name: 'ViewPage',
    props: {
        postTit: {
            type: String,
            default: "",
        },
        
        postDate: {
            type: String,
            default: "",
        },

        postURL: {
            type: String,
            default: "",
        }
    },
    computed: {
        // ...mapState([ 'currentViewTitle', 'currentViewDate', 'currentViewContent' ])
        
		currentView() {
            const postCon = this.$store.state.currentView;
            // console.log(postCon);

            if(postCon.title !== null){
                const assetUrl = location.hostname === "localhost" ? 'http://localhost:9000/blogAPI' : '/blogAPI';

                if(location.hostname === "localhost"){

                    let fileContent = '';

                    const sliceIdx = postCon.content.indexOf('---', 2);

                    if(postCon.content.indexOf('---', 2) !== -1){
                        fileContent = postCon.content.slice(sliceIdx);
                    }else{
                        fileContent = postCon.content;
                    }

                    const converter = new showdown.Converter();
                    const postHTML = converter.makeHtml(fileContent);
                    const postContent = postHTML.replaceAll('/assets/', assetUrl+'/assets/');

                    const currentView = {
                        title : postCon.title,
                        date : postCon.date,
                        content : postContent
                    }
                    return currentView;
                }else{
                    const postHTML = postCon.content.slice(postCon.content.indexOf('<h1><a href="https://jayj-fe.github.io/blogAPI/">blogAPI</a></h1>'))
                    const postContent = postHTML.replaceAll('/assets/', assetUrl+'/assets/');

                    const currentView = {
                        title : postCon.title,
                        date : postCon.date,
                        content : postContent
                    }
                    return currentView;
                }
            }else{
                return postCon;
            }
        }
    },
    methods: {
        ...mapActions([ 'fetchPostView' ]),
    },
    mounted() {
        console.log(this.postTit)
        if(this.postTit === ''){
            const localStoragePost = JSON.parse(localStorage.getItem('currentPost'));
            // console.log(localStoragePost);
            this.fetchPostView(localStoragePost);
        }else{
            localStorage.setItem('currentPost', JSON.stringify({
                title : this.postTit,
                date : this.postDate,
                url : this.postURL
            }));

            this.fetchPostView({
                title : this.postTit,
                date : this.postDate,
                url : this.postURL
            });
        }
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>
</style>
