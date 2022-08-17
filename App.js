import { StyleSheet } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"

import Login from "./screen/Login"
import PhotoList from "./screen/PhotoList"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => {
          return {
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={PhotoList}
          options={() => {
            return { tabBarIcon: () => <Icon name="house" size="20" /> }
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={() => ({
            tabBarIcon: () => (
              <Icon name="sc-telegram" type="evilicon" size="20" />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
})
