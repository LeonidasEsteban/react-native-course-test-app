import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet
} from 'react-native';
import Suggestion from '../components/suggestion';
import Separator from '../components/separator';
import Empty from '../components/empty';

class Suggestions extends Component {
  keyExtractor = item => item.id.toString();
  itemSeparator = item => <Separator />
  listEmpty = item => <Empty />
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recomendador para ti</Text>
        {/*renderItem={( {item} ) =>  <Text>{item.title}</Text>}*/}
        <FlatList
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

const styles = StyleSheet.create({
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  container: {
    paddingVertical: 10
  }
})

export default Suggestions;
