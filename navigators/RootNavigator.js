import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importing Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import { View, StyleSheet } from "react-native";

// Instantiate Stack Navigation
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <View style={styles.container} >
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default RootNavigator;
