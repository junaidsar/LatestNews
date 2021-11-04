import React from "react";
import { StyleSheet, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./store";
import WelcomeScreen from "./screens/WelcomeScreen";
import NewsScreen from "./screens/NewsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NavigationStateNotifier from "./utils/NavigationStateNotifier";

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        news: { screen: NewsScreen },
        settings: { screen: SettingsScreen }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        swipeEnabled: false
      }
    );
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator
            onNavigationStateChange={(prevState, currentState) => {
              NavigationStateNotifier.onNavigationStateChange(
                prevState,
                currentState
              );
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
