import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/backgronund.png')}
      style={styles.container}
    >
      <Text style={styles.title}>{props.title}</Text>
      <View>
        {props.children}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4c4c4c',

  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  }
})

export default CategoryListLayout;
