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
        postURL: {
            type: String,
            default: "",
        }
    },
    computed: {
        // ...mapState([ 'currentViewTitle', 'currentViewDate', 'currentViewContent' ])
        
		currentView() {
            const postCon = this.$store.state.currentView;
            console.log('postCon');
            console.log(postCon);

            if(postCon.title !== null){
                const assetUrl = location.hostname === "localhost" ? 'http://localhost:9000/blogAPI' : '/blogAPI';

                let fileContent = '';

                const sliceIdx = postCon.indexOf('---', 2);
                const postInfoText = postCon.slice(postCon.indexOf('title'), sliceIdx).replace(/(\r\n|\n|\r)/gm, "::");
                const postInfoArr = postInfoText.split('::');
                const fileInfoObj = postInfoArr.map( (ele) => {
                    const arr = ele.split(': ');
                    return arr[1]
                });
                    
                // 날짜 타입으로 변환하기
                const postDate = fileInfoObj[2].slice(0, 10);

                if(postCon.indexOf('---', 2) !== -1){
                    fileContent = postCon.slice(sliceIdx);
                }else{
                    fileContent = postCon;
                }

                const converter = new showdown.Converter();
                let postHTML = converter.makeHtml(fileContent);
                postHTML = postHTML.replaceAll('/assets/', assetUrl+'/assets/');

                const currentView = {
                    'title' : fileInfoObj[0],
                    'author' : fileInfoObj[1],
                    'date' : postDate,
                    'content' : postHTML
                }

                return currentView;
            }else{
                return postCon;
            }
        }
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
