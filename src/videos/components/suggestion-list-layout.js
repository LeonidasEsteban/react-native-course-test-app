import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function SuggestionListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  container: {
    paddingVertical: 10,
    flex: 1,
  }
})

export default SuggestionListLayout
