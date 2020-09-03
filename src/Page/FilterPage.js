import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Switch, ScrollView, Platform, TouchableOpacity } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import Colors from '../constant/Colors'
import { fonts } from '../asset/fonts'
import {useSelector} from 'react-redux'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={[styles.option, { color: '#474747' }]}>{props.label}</Text>
            <Switch
                trackColor={{ true: "violet" }}
                thumbColor={Platform.OS === "android" ? Colors.primary : ''}
                value={props.value}
                onValueChange={props.onValueChange}
            />
        </View>
    )
}

const FilterPage = (props) => {
const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters)
    },[isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    },[saveFilters])

    return (
        <View style={styles.page}>
            {/* <Text style={styles.title}>Available Filters/Restrictions</Text> */}
            <FilterSwitch
                label="Gluten Free"
                value={isGlutenFree}
                onValueChange={(newValue) => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose Free"
                value={isLactoseFree}
                onValueChange={(newValue) => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                value={isVegan}
                onValueChange={(newValue) => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                value={isVegetarian}
                onValueChange={(newValue) => setIsVegetarian(newValue)}
            />

            <TouchableOpacity
                onPress={
                     props.navigation.getParam('save')
                }
                activeOpacity={0.5}
                style={{
                    backgroundColor: Colors.primary,
                    width: 90, alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    borderRadius: 10
                }}
            >
                <Text style={{
                    color: 'white', fontFamily: fonts.tiki, fontSize: 25, letterSpacing: 1,
                    padding: 10
                }}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}

FilterPage.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" color="green" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        // headerTitle: 'Filter',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: 'green',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" color="green" onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>,
    }
}

export default FilterPage

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    title: {
        fontFamily: fonts.tiki,
        fontSize: 24,
        marginVertical: 20
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    option: {
        fontFamily: fonts.tiki,
        fontSize: 25,
        letterSpacing: 1,
    }
})
