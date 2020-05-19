import React, { Component } from 'react';
import { StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { colors } from '../constants/colors';
import types from '../constants/types'

const WIDTH = Dimensions.get("window").width

const ActionButton =
  function ({ navigation, title, destination, backgroundColor, textColor }:
    types["ButtonParams"]): any {
    let titleStyle = { color: textColor, fontSize: 24 }
    return (
      <Button
        buttonStyle={buttonStyle(backgroundColor)}
        titleStyle={titleStyle}
        title={title}
        onPress={() => {
          return navigation.navigate(destination)
        }}
      />
    )
  }

type Props = StackScreenProps<types["RootStackParams"], 'Home'>;

export default function HomeScreen({ route, navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ActionButton
          navigation={navigation}
          title="todos"
          destination="TodoList"
          backgroundColor={colors.blueYonder}
          textColor={colors.naplesYellow}
        />
        <ActionButton
          navigation={navigation}
          title="store"
          destination="Store"
          backgroundColor={colors.naplesYellow}
          textColor={colors.blueYonder}
        />
      </View>
    </View>
  );
}

const buttonStyle =
  (backgroundColor: types["Color"]): ViewStyle => {
    let width = Dimensions.get("window").width;
    return ({
      width: width / 4,
      height: width / 8,
      borderRadius: width / 50,
      margin: width / 50,
      backgroundColor: backgroundColor
    })
  }

interface Style {
  buttonContainer: ViewStyle;
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
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