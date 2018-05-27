import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function HorizontalSeparator(props) {
  return (
    <View style={styles.wrapper}>

    </View>
  )
}

const styles = {
  wrapper: {
    borderLeftWidth: .5,
    borderLeftColor: 'red',
    flex: 1,
    marginHorizontal: 5,
  }
}

export default HorizontalSeparator;
