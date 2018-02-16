// Imports
import React from 'react';
import { View, Text } from 'react-native';

const Styles = {
  textStyle: {
    backgroundColor: "#F38630",
    color: "#FFF",
    fontSize: 30,
    fontWeight: '600',
    paddingVertical: 30,
    paddingHorizontal: 15,
    textAlign: 'center',

  }
};

// App views
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={Styles.textStyle}>Frases do Dia</Text>
      </View>
    );
  }
}
