import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
} from 'react-native';
import Suggestion from '../components/suggestion';
import Separator from '../../sections/components/vertical-separator';
import Empty from '../../sections/components/empty';
import Layout from '../components/suggestion-list-layout';
import { connect } from 'react-redux';
import API from '../../../utils/api';

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  itemSeparator = item => <Separator />
  listEmpty = item => <Empty text="No hay sugerencias" />
  viewMovie = (item) => {
    console.log(`Movie id = ${item.id}`);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }
  renderItem = ({ item }) => {
    return (
      <Suggestion
        {...item}
        key={item.id}
        onPress={()=>{ this.viewMovie(item) }}
      />
    )
  }
  render() {
    return (
      <Layout
        title="Recomendados para ti"
        >
        <FlatList
          data={this.props.list}
          initialNumToRender={3}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.listEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>

    )
  }
}

export default connect(mapStateToProps)(SuggestionList);
