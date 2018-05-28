/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import Header from './src/sections/components/header';
import Home from './src/screens/containers/home';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import api from './utils/api';
import Player from './src/player/containers/player';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const suggestionList = await api.getSuggestions(20);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });
    const categoryList = await api.getMovies(20);
    console.log(categoryList)
    // const query = await fetch(`https://yts.am/api/v2/movie_suggestions.json?movie_id=10`);
    // const { data: suggestions } = await query.json();
    // this.setState({
    //   suggestions.movies,
    //   suggestionList,
    //   categoryList,
    // })
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
  }
  render() {
    {/* list={this.state.categoryList} */}
    {/* list={this.state.suggestionList} */}
    return (
      <Provider
        store={store}
        >
        <Home>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}

