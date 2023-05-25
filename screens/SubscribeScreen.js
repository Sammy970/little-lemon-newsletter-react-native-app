import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native';

// Importing Validate email from utils
import { validateEmail } from '../utils';

const green = '#495E57';
const lightGreen = '#9FC49B'; // Define a lighter shade of green for disabled state

const SubscribeScreen = () => {
  // Add subscribe screen code here

  const [email, onChangeEmail] = React.useState('');
  const [emailVal, setEmailVal] = React.useState(true);

  const handleEmailChange = (text) => {
    onChangeEmail(text);
    setEmailVal(!validateEmail(text)); // Update emailVal based on email validation result
  };

  const handleSubscribePress = () => {
    Alert.alert('You have successfully subscribed to our newsletter!');
  };

  return (
    <View style={styles.container}>

      {/* Adding Image */}
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.image}
        resizeMode='center' />

      {/* Adding Text */}
      <Text style={styles.regularText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      {/* Adding Text Input Box */}
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        keyboardType='email-address'
        style={styles.inputBox}
        placeholder='Type your email'
      />


      {/* Adding Subscribe Button */}
      <Pressable
        style={[styles.button, emailVal && styles.disabledButton]}
        disabled={emailVal}
        onPress={handleSubscribePress} >

        <Text style={[styles.buttonText, emailVal && styles.disabledButtonText]}>Subscribe</Text>

      </Pressable>

      <Text>
      </Text>

    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  regularText: {
    padding: 10,
    fontSize: 22,
    color: '#444444',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -70,
  },
  image: {
    height: 300,
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -40,
  },
  inputBox: {
    padding: 8,
    paddingLeft: 15,
    margin: 30,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#333333',
    fontSize: 18,
    // fontWeight: 'bold',
    gap: 20,
  },
  button: {
    padding: 8,
    backgroundColor: green,
    width: '90%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: 19,
    color: 'lightgray',
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5, // Apply a lower opacity to indicate the button is disabled
    backgroundColor: lightGreen, // Change the background color for disabled state
  },
  disabledButtonText: {
    color: 'black',
  }
})

export default SubscribeScreen;
