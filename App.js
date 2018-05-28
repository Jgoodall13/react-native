import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import Albums from './src/components/Albums';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Albums />
      </View>
    );
  }
}
