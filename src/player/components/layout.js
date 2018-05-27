import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

function PlayerLayout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      <View style={styles.overlay}>
        {
          props.loading &&
          props.loader
        }
      </View>
      {props.controls}
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 300,
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default PlayerLayout;
