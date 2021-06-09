import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <AppContainer />;
  }
}
const tabs = createBottomTabNavigator({
  WriteStoryScreen: { screen: WriteStoryScreen },
  ReadStoryScreen: { screen: ReadStoryScreen },
});
const AppContainer = createAppContainer(tabs);
