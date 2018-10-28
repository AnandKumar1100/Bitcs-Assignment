import React from "react";
import { StackNavigator } from 'react-navigation'

import HomeScreen from "../Screens/Home"
import CombiDetailsScreen from "../Screens/CombiDetails"

const PrimaryNav = StackNavigator(
    {
        HomeScreen : {screen : HomeScreen},
        CombiDetailsScreen : {screen : CombiDetailsScreen}
    },
    {
        initialRouteName: "CombiDetailsScreen",
        headerMode : "none"
    }
);

export default PrimaryNav 