import React from "react";
import { StackNavigator } from 'react-navigation'

import HomeScreen from "../Screens/Home"

const PrimaryNav = StackNavigator(
    {
        HomeScreen : {screen : HomeScreen},
    },
    {
        initialRouteName: "HomeScreen",
        headerMode : "none"
    }
);

export default PrimaryNav 