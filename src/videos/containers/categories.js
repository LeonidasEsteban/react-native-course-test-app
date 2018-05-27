import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Category from '../components/category';
import HorizontalSeparator from '../components/horizontal-separator';
import Layout from '../components/category-list-layout';

class Categories extends Component {
  keyExtractor = item => item.id.toString();
  itemSeparator = item => <HorizontalSeparator />
  render() {
    return (
      <Layout
        title="Categorias"
      >
        <FlatList
          horizontal={true}
          data={this.props.list}
          initialNumToRender={1}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.listEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={( {item} ) =>  <Category {...item} key={item.id} />}
        />
      </Layout>
    )
  }
}

export default Categories;
