import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={{
            uri: props.background_image
          }}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{props.genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rating}>{props.rating} Estrellas</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  cover: {
    height: 90,
    width: 148,
    resizeMode: 'cover'
  },
  left: {

  },
  genre: {
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    top: 0,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white',
    fontSize: 11,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    color: '#44546b',
    fontSize: 18,
  },
  year: {
    backgroundColor: '#70b124',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 11,
    color: 'white',
    borderRadius: 5,
    overflow: 'hidden'
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  }
})

export default Suggestion;
