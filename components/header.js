import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

function Header(props) {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          {/*<Text>Header</Text>*/}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
  },
  container: {
    paddingVertical: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  }
})

export default Header
