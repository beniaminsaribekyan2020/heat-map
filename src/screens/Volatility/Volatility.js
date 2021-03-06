import React, { Component } from "react";
import { View, Text } from "react-native";

class VolatilityScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "settingsToggle") {
        this.props.navigator.push({
          screen: "heatmap.SettingsScreen",
          title: "Settings"
        });
      }
      if (event.id === "notificationsToggle") {
        this.props.navigator.push({
          screen: "heatmap.NotificationsScreen",
          title: "Notifications"
        });
      }
    }
  };
  render() {
    return (
      <View>
        <Text>Volatility Screen</Text>
      </View>
    );
  }
}

export default VolatilityScreen;
