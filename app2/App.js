// Imports
import React from 'react';
import { View, Text } from 'react-native';

const Styles = {
  textStyle: {
    backgroundColor: "#F38630",
    color: "#FFF",
    fontSize: 30,
    fontWeight: "600",
    height: 100,
    textAlign: 'center',
    width: 200
  },
  viewStyle: {
    backgroundColor: "#69D2E7",
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

// App views
export default class App extends React.Component {
  render() {
    const { textStyle, viewStyle } = Styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Frases do Dia</Text>
      </View>
    );
  }
}
