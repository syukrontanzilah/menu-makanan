import React, {useState} from 'react';
import Splash from './src/Page/Splash';
import CategoriesScreen from './src/Page/CategoriesScreen';
import MealNavigator from './src/navigation/MealNavigator';
import {useScreens} from 'react-native-screens'

useScreens()

export default function App() {
  return (
   <MealNavigator/>
  );
}