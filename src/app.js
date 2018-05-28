import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Header from './sections/components/header';
import Home from './screens/containers/home';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import api from '../utils/api';
import Player from './player/containers/player';
import Movie from './screens/containers/movie';

class App extends Component {
  async componentDidMount() {
    const suggestionList = await api.getSuggestions(20);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });
    const categoryList = await api.getMovies(20);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    } else {
      return (
        <Home>
          <Header />
          <CategoryList />
          <SuggestionList />
        </Home>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(App);
