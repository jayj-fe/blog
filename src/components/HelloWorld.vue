<template>
  <div class="hello">
    <div v-html="postContent"></div>
  </div>
</template>

<script>
import api from '../api/index.js';
import showdown from "showdown";

export default {
  name: 'HelloWorld',
  data() {
    return {
      postContent : undefined
    }
  },
  props: {
    msg: String
  },
  methods: {
    callPage(url){
      api.get(url)
        .then(res => {
          // console.log(res);
          const postCon = res.data;
          // console.log(postCon);

          let fileContent = '';

          if(postCon.indexOf('---', 2) !== -1){
            fileContent = postCon.slice(postCon.indexOf('---', 2));
          }else{
            fileContent = postCon;
          }

          // console.log(fileContent);

          const converter = new showdown.Converter();
          const postHTML = converter.makeHtml(fileContent);

          this.postContent = postHTML;

          // console.log(postHTML);
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  },
  mounted() {
    api.get('/blogAPI/postlist.json')
      .then(res => {
        console.log(typeof res.data);
        console.log(res.data);
        const postData = res.data.postlist;
        console.log(postData);
        const htmlCate = [];

        postData.forEach(ele => {
          console.log(ele);
          if(ele.categories.find(v => v == 'html') !== undefined){
            htmlCate.push(ele);
          }
        });

        console.log('모든 리스트 출력**********');
        console.log(htmlCate);
        console.log('html 타입 출력**********');

        this.callPage('/blogAPI'+htmlCate[0].url)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
