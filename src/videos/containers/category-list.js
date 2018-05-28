import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Category from '../components/category';
import HorizontalSeparator from '../../sections/components/horizontal-separator';
import Layout from '../components/category-list-layout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list: state.categoryList
  }
}

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

export default connect(mapStateToProps)(Categories);
