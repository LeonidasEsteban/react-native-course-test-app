import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
} from 'react-native';
import Suggestion from '../components/suggestion';
import Separator from '../../sections/components/vertical-separator';
import Empty from '../../sections/components/empty';
import Layout from '../components/suggestion-list-layout';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  itemSeparator = item => <Separator />
  listEmpty = item => <Empty text="No hay sugerencias" />
  viewMovie = (item) => {
    console.log(`Movie id = ${item.id}`);
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
        title="Recomendador para ti"
        >
        <FlatList
          data={this.props.list}
          initialNumToRender={1}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.listEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>

    )
  }
}

export default SuggestionList;
