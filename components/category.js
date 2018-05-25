import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native';

function Category(props) {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: props.background_image
      }}
    >
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    // width: 100,
    // height: 100,
    flex: 1,
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
  }
})

export default Category
