import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import API from '../../../utils/api';

class Search extends Component {
  state = {
    text: ''
  }
  handleSubmit = async () => {
    console.log(this.state.text);
    const movies = await API.searchMovie(this.state.text);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0]
      }
    })
  }
  handleChangeText = (text) => {
    this.setState({
      text
    })
  }
  // setRef = (input) => {
  //   this.input = React.createRef();
  //   // debugger
  // }
  render() {
    return (
      <TextInput
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmit}
        style={styles.input}
        placeholder="Busca tu película favorita"
        autoCorrect={false}
        autoCapitalize="none"
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search);
