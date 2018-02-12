import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Gerar um número randômico"
          onPress={randomNumber}
        />
      </View>
    );
  }
}

const randomNumber = () => {
  const number = Math.round(Math.random() * 10);
  alert(number);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
