import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const green = '#495E57';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        resizeMode='contain'
        style={styles.image}
        accessibilityLabel='Logo'
      />

      <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Subscribe')
        }}
      >
        <Text style={styles.buttonText}>Newsletter</Text>

      </Pressable>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  image: {
    height: 300,
    width: 100,
    margin: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 130,
  },
  regularText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -40,
  },
  button: {
    marginTop: 250,
    padding: 13,
    backgroundColor: green,
    width: '90%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
  }
})

export default WelcomeScreen;
