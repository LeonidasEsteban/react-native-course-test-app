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
            source={{
              uri: 'https://static.platzi.com/static/images/logos/platzi@2x.fdf870da3a22.png'
            }}
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
    backgroundColor: 'lightblue',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  }
})

export default Header
