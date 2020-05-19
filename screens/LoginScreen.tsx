import React, { FunctionComponent } from 'react';
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from '../constants/colors';
import types from '../constants/types'

type Props = StackScreenProps<types["RootStackParams"], 'Login'>;


export default function LoginScreen({ route, navigation }: Props) {
  return (<View>TODO</View>)
}