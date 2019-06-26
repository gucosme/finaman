import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";

import colors, { darken } from "./constants/colors";
import AddButton from "./components/AddButton";

export default createAppContainer(
  createBottomTabNavigator(
    {
      Dashboard:{
        screen: Dashboard,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (<Icon name="database" size={30} color={tintColor || "#fff"} />)
        }),
      },
      AddButton: {
        screen: () => null,
        navigationOptions: () => ({
          tabBarIcon: (<AddButton/>),
          tabBarOnPress: () => {}
        })
      },
      Menu:{
        screen: Menu,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (<Icon name="bars" size={30} color={tintColor  || "#fff"} />)
        }),
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: colors.base,
          padding: 10,
        },
        activeBackgroundColor: darken(colors.base, 70),
        inactiveBackgroundColor: darken(colors.base, 70),
        activeTintColor: colors.secundaryText,
        inactiveTintColor: darken(colors.base, 100),
      }
    }
  )
);
