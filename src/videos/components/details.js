import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

function Details(props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.description}>{props.description_full}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: .5,
    borderBottomColor: '#eaeaea',
    padding: 20,
  },
  bottom: {
    padding: 20,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
  }
})

export default Details;
