import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, StatusBar, Platform } from 'react-native'
import { fonts } from '../asset/fonts'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constant/Colors'



const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({ 
                        routeName: 'CategoryMeals', 
                        params: {
                        categoryId: itemData.item.id, 
                    } })
                }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.page}>
            
            <StatusBar
            barStyle="light-content"
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />

        </View>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTintColor: Colors.primary
}

export default CategoriesScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    gridItem: {
        margin: 15,
        height: 100,
        backgroundColor: 'wheat',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})
