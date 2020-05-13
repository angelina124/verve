import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ActionButton ({navigation, title, destination, 
  backgroundColor, textColor}) {
  let titleStyle = {color: textColor}
  return (
    <Button
    buttonStyle={styles.button(backgroundColor, textColor)}
    titleStyle={titleStyle}
    title={title}
    onPress={() => navigation.navigate(destination)}
    />
  )
}

export default function StatsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ActionButton 
          navigation={navigation}
          title="todos" 
          destination="TodoList" 
          backgroundColor="#AD71C9"
          textColor="#CBFFFF"
        />
        <ActionButton 
          navigation={navigation}
          title="store" 
          destination="Store" 
          backgroundColor="#CBFFFF"
          textColor="#AD71C9"
        />
        <ActionButton 
          navigation={navigation}
          title="add reward" 
          destination="AddReward" 
          backgroundColor="#00CADF"
          textColor="#FFFFFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: (backgroundColor) => {
    let width = Dimensions.get("window").width
    return ({
      width: width/5,
      height: width/5,
      borderRadius: width/10,
      margin: width/50,
      backgroundColor: backgroundColor
    })
  },
  buttonContainer: {
    flexDirection: "row"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});