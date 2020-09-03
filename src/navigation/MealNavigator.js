import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import CategoriesScreen from '../Page/CategoriesScreen';
import CategoryMealsScreen from '../Page/CategoryMealsScreen';
import MealDetailScreen from '../Page/MealDetailScreen';
import Colors from '../constant/Colors';
import { fonts } from '../asset/fonts';
import FavoriteScreen from '../Page/FavoriteScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FilterPage from '../Page/FilterPage'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'white' : ''
    },
    headerTitleStyle: {
        fontFamily: fonts.tiki
    },
    headerTintColor: Colors.primary,
    headerTitle: 'A Screen'
}


const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            // headerTitle: 'Meals Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {}

    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            // headerTitle: 'Detail'
        }
    },

}, {
    mode: 'card',
    initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
})

const FavNavigator = createStackNavigator(
    {
        Favorites: {
            screen: FavoriteScreen,
            navigationOptions: {
                headerTitle: <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 27, color: Colors.primary, fontFamily: fonts.tiki, marginLeft: 20 }}> My Favorite</Text>
                    <Ionicons name="heart" color="red" size={20} />
                </View>
            }
        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const MealFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarLabel: (tabLabel) => {
                return <Text style={{ textAlign: 'center', fontFamily: fonts.tiki, color: tabLabel.tintColor, marginBottom: 4, marginTop: -4, fontSize: 16 }}>Meal</Text>
            },
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="fast-food" size={20} color={tabInfo.tintColor} />
            },
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: (tabLabel) => {
                return <Text style={{ textAlign: 'center', fontFamily: fonts.tiki, color: tabLabel.tintColor, marginBottom: 4, marginTop: -10, fontSize: 16 }}>Favorite</Text>
            },
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="heart" size={20} color={tabInfo.tintColor} />
            },
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.primary,
    }
})


const FiltersNavigator = createStackNavigator({
    Filters: {
        screen: FilterPage,
        navigationOptions: {
            headerTitle: <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 27, color: Colors.primary, fontFamily: fonts.tiki, marginLeft: 20 }}>Filters</Text>
            </View>
        },

    }
})

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealFavTabNavigator,
            navigationOptions: {
                drawerLabel: <View style={{flexDirection:'row', alignItems:'center', marginLeft:10, paddingVertical:10}}>
                    <Ionicons name="fast-food" color={Colors.primary}  size={20}/>
                    <Text style={{ textAlign: 'center', fontFamily: fonts.tiki, color: Colors.primary, fontSize: 25, marginLeft:10 }}>Meals Category</Text>
                </View>
            }
        },
        Filters: {
            screen: FiltersNavigator,
            navigationOptions: {
                drawerLabel: <View style={{flexDirection:'row', alignItems:'center', marginLeft:10, paddingVertical:10}}>
                    <Ionicons name="search" color={'green'}  size={20}/>
                    <Text style={{ textAlign: 'center', fontFamily: fonts.tiki, color: 'green', fontSize: 25, marginLeft:10 }}>Filter</Text>
                </View>
            }
        },
    }
)

export default createAppContainer(MainNavigator);


const styles = StyleSheet.create({})
