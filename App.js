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
import Header from './src/videos/components/header';
import Home from './src/videos/containers/home';
import Suggestions from './src/videos/containers/suggestions';
import Categories from './src/videos/containers/categories';
import api from './utils/api';
import Player from './src/player/containers/player';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestions: []
  }
  async componentDidMount() {
    const suggestions = await api.getSuggestions(20);
    const categories = await api.getMovies(20);
    // const query = await fetch(`https://yts.am/api/v2/movie_suggestions.json?movie_id=10`);
    // const { data: suggestions } = await query.json();
    this.setState({
      // suggestions: suggestions.movies,
      suggestions: suggestions,
      categories: categories,
    })



  }
  render() {
    return (
      <View style={styles.container}>
        <Home>
          <Header />
          <Player />
          <Categories
            list={this.state.categories}
          />
          <Suggestions
            list={this.state.suggestions}
          />
        </Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
