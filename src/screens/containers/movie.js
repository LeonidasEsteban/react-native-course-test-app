import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/movie-layout';
import Player from '../../player/containers/player';
import Details from '../../videos/components/details';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      }
    });
  }
  render() {
    return (
      <Layout>
        <Header>
          <Close onPress={this.closeVideo}/>
        </Header>
        <Player {...this.props.movie} />
        <Details {...this.props.movie} />
      </Layout>
    )
  }
}

function mapStateToProp(state) {
  return {
    movie: state.selectedMovie,
  }
}

export default connect(mapStateToProp)(Movie)
