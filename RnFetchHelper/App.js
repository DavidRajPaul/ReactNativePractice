import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApiHandler } from './apihelper/ApiHelper'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mData: {}
    }
  }

  componentDidMount() {
    var Api = ApiHandler('https://gist.githubusercontent.com/DavidRajPaul')
    Api.request.get(
      Api.response(data => {
        this.setState({ mData: data });
      })
    );
  }

  render() {
    const { name = '', age = '', car = '' } = this.state.mData;
    return (
      <View style={styles.container}>
        <Text>A simple Fetch Helper</Text>
        <Text>---------------------</Text>
        <Text>{name + '\n' + age + '\n' + car}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
