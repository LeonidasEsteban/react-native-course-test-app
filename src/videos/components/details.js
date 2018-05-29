import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  WebView,
  Image,
} from 'react-native';

const makeHTML = (id) => {
  return (
    `
      <style>
        .video {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          padding-top: 25px;
          height: 0;
        }
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      </style>
      <div className="video">
        <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    `
  )
}

function Details(props) {
  console.log(props);
  return (
      <ScrollView
        style={styles.container}
      >
        <View style={styles.top}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.details}>
            <Image
              style={styles.cover}
              source={{uri: props.medium_cover_image}}
            />
            <Text style={styles.description}>{props.description_full}</Text>
          </View>
          <View style={styles.trailer}>
            <WebView
              source={{html: makeHTML(props.yt_trailer_code)}}
            />
          </View>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  trailer: {
    height: 200,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  }
})

export default Details;
