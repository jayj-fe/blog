import api from '@/api';
import showdown from "showdown";
import { TOGGLE_HEADER, FETCH_POST_LIST, FETCH_POST_VIEW, FETCH_CATEGORIES_LIST } from './mutations-types';

export default {
  toggleHeader({ commit }, payload){
    commit(TOGGLE_HEADER, payload)
  },
  fetchPostList ({ commit }, payload) {
    let url = '/blogAPI/'+payload+'list.json';
    return api.get(url)
    .then(res => {
      res.data.postlist.forEach( el => {
        el.date = el.date.slice(0, 10);
        const converter = new showdown.Converter();
        el.con = converter.makeHtml(el.con).replace(/<[^>]*>?/g, '');
        el.con = el.con.replaceAll('\\&lt;', '<')
      });
      commit(FETCH_POST_LIST, res.data.postlist)
    })
    .catch(error => {
      console.log(error)
    })
  },
  fetchPostView ({ commit }, payload) {
    let url = '/blogAPI'+payload;
    // console.log(url);

    // '/blogRenewalTest/' : '/'
    const assetUrl = location.hostname === "localhost" ? 'http://localhost:9000/blogAPI' : '/blogAPI';
    // console.log(assetUrl);
    
    return api.get(url)
    .then(res => {
      
      const postCon = res.data;
      // console.log(res.data);

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
      
      // filter
      // console.log(postHTML);
      postHTML = postHTML.replaceAll('/assets/', assetUrl+'/assets/');
      // let aTags = postHTML.querySelect
      // console.log(fileInfoObj[0]);
      const postObj = {
        'title' : fileInfoObj[0],
        'author' : fileInfoObj[1],
        'date' : postDate,
        'content' : postHTML
      }

      // console.log(postObj);

      commit(FETCH_POST_VIEW, postObj);
    })
    .catch(error => {
      console.log(error)
    })
  },
  fetchCategoriesList ({ commit }) {
    return api.get('/blogAPI/categorieslist.json')
    .then(res => {
      commit(FETCH_CATEGORIES_LIST, res.data.categorieslist)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
