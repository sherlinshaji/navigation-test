import React from 'react';
import {StyleSheet,Text, View,Button } from 'react-native';
import LoginPage from './src/components/LoginPage';
import HomePage from './src/components/HomePage';
import {StackNavigator} from 'react-navigation';

const RootStack=StackNavigator(
  {
    login:{
      screen:LoginPage,
    },
    Home:{
      screen:HomePage,
    },
  },
  {
    initialRouteName : 'login',
  }

);
export default class App extends React.Component {
  render() {
    return (
      <View  style={styles.container}>
        <RootStack/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
