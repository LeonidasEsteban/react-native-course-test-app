import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Suggestion from '../components/suggestion';


class Categories extends Component {
  keyExtractor = item => item.id.toString();

  render() {
    return (
      <View>
        <Text>Categories</Text>
        <FlatList
          horizontal={true}
          data={this.props.list}
          initialNumToRender={1}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.listEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={( {item} ) =>  <Suggestion {...item} key={item.id} />}
        />
      </View>
    )
  }
}

export default Categories;
