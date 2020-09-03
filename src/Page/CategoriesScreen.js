import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, StatusBar, Platform, ImageBackground, Image } from 'react-native'
import { fonts } from '../asset/fonts'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constant/Colors'
import CategoryGrid from '../component/CategoryGrid'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'



const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGrid
                title={itemData.item.title}
                image={itemData.item.image}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id,
                        }
                    })
                }}
            />
        )
    }
    return (
        <View style={styles.page}>

            <StatusBar
                barStyle="light-content"
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />

        </View>
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => { 
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerTitle: <Text style={{
            fontFamily: fonts.tiki,
            fontSize: 24,
            color: Colors.primary,
            alignSelf: 'center',
            marginLeft: 20
        }}>Meals Category</Text>,
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: Colors.primary,
    }
}

export default CategoriesScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginHorizontal: 5
    },
    gridItem: {
        margin: 10,
        height: 100,
        backgroundColor: 'wheat',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
