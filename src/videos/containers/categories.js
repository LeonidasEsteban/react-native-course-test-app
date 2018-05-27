import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Category from '../components/category';
import HorizontalSeparator from '../components/horizontal-separator';

class Categories extends Component {
  keyExtractor = item => item.id.toString();
  itemSeparator = item => <HorizontalSeparator />
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
          renderItem={( {item} ) =>  <Category {...item} key={item.id} />}
        />
      </View>
    )
  }
}

export default Categories;
