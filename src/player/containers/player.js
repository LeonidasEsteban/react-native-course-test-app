import React, { Component } from 'react';
import Video from 'react-native-video';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  }
  setRef = (element) => {
    this.video = element;
  }
  onBuffer = ({ isBuffering }) => {
    // console.log('on buffer', data)
    this.setState({
      loading: isBuffering,
    })
  }
  onLoad = () => {
    // console.log('on load')
    this.setState({
      loading: false,
    })
  }
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            }}
            ref={this.setRef}
            style={styles.video}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            paused={this.state.paused}
            rate={1.0}
            volume={0}
            resizeMode="contain"
          />
        }
        loader={
          <ActivityIndicator
            color="red"
          />
        }
        controls={
          <ControlLayout>
            <PlayPause
              paused={this.state.paused}
              onPress={this.playPause}
            />
            <Text>Prgress Bar | </Text>
            <Text>Time left | </Text>
            <Text>FullScreen </Text>
          </ControlLayout>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default Player;
