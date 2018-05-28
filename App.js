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
  View,
  ScrollView
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import Header from './src/sections/components/header';
// import Home from './src/screens/containers/home';
// import SuggestionList from './src/videos/containers/suggestion-list';
// import CategoryList from './src/videos/containers/category-list';
// import api from './utils/api';
// import Player from './src/player/containers/player';
import LoadingApp from './src/sections/components/loading-app';
import { store, persistor } from './store';
// import Movie from './src/screens/containers/movie';
//
//
import AppLayout from './src/app';

type Props = {};
export default class App extends Component<Props> {
  // state = {
  //   suggestionList: [],
  //   categoryList: [],
  // }
  // async componentDidMount() {
  //   const suggestionList = await api.getSuggestions(20);
  //   store.dispatch({
  //     type: 'SET_SUGGESTION_LIST',
  //     payload: {
  //       suggestionList
  //     }
  //   });
  //   const categoryList = await api.getMovies(20);
  //   console.log(categoryList)
  //   // const query = await fetch(`https://yts.am/api/v2/movie_suggestions.json?movie_id=10`);
  //   // const { data: suggestions } = await query.json();
  //   // this.setState({
  //   //   suggestions.movies,
  //   //   suggestionList,
  //   //   categoryList,
  //   // })
  //   store.dispatch({
  //     type: 'SET_CATEGORY_LIST',
  //     payload: {
  //       categoryList
  //     }
  //   });
  // }
  render() {
    {/* list={this.state.categoryList} */}
    {/* list={this.state.suggestionList} */}
    return (
      <Provider
        store={store}
        >
        <PersistGate
          loading={<LoadingApp />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

