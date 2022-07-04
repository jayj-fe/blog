import api from '@/api';
import showdown from "showdown";
import { TOGGLE_HEADER, FETCH_POST_LIST, FETCH_ARCHIVE_LIST, FETCH_POST_VIEW, FETCH_CATEGORIES_LIST } from './mutations-types';

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
  fetchArchiveList ({ commit }) {
    let url = '/blogAPI/postlist.json';
    return api.get(url)
    .then(res => {
      commit(FETCH_ARCHIVE_LIST, res.data.postlist)
    })
    .catch(error => {
      console.log(error)
    })
  },
  fetchPostView ({ commit }, payload) {
    let url = '/blogAPI'+payload;
    // console.log('url');
    // console.log(url);
    return api.get(url)
    .then(res => {
      // console.log('res.data');
      // console.log(res.data);
      commit(FETCH_POST_VIEW, res.data);
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
