import React, {useState} from 'react';
import Splash from './src/Page/Splash';
import CategoriesScreen from './src/Page/CategoriesScreen';
import MealNavigator from './src/navigation/MealNavigator';
import {useScreens} from 'react-native-screens'
import{createStore, combineReducers} from 'redux'
import mealsReducer from './src/store/reducers/meals'
import {Provider} from 'react-redux'

useScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})


const store = createStore(rootReducer)


export default function App() {
  return (
    <Provider store ={store}>
        <MealNavigator/>
    </Provider>
 
  );
}

