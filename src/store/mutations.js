import { TOGGLE_HEADER, FETCH_POST_LIST, FETCH_POST_VIEW, FETCH_CATEGORIES_LIST } from './mutations-types'

export default {
  [TOGGLE_HEADER] (state, booleanVal){
    state.isActiveHeader = booleanVal;
  },
  [FETCH_POST_LIST] (state, posts) {
    state.currentPosts = posts;
  },
  [FETCH_POST_VIEW] (state, posts) {
    state.currentViewTitle = posts.title;
    state.currentViewDate = posts.date;
    state.currentViewContent = posts.content;
  },
  [FETCH_CATEGORIES_LIST] (state, categoriesList) {
    state.categoriesList = categoriesList;
  }
}
