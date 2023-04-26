import { useState, useEffect } from "react"
import {View,ScrollView,StyleSheet} from "react-native"
import RestaurantCard from "./ResturantCard"
import Random from "./Random"
export default function ResturantList({navigation}){
    const [foodList, setFoodList]= useState()
    useEffect(()=>{
        fetch('https://my-first-firestore-bc.web.app/restaurants')
        .then(resp => resp.json())
        .then(setFoodList)
        .catch(alert)
    },[])

    return (
        <>
        <View style={style.container}>
        <ScrollView style={style.list}>
            {foodList && foodList.map(food => (
                <RestaurantCard food={food} key={food.id} navigation={navigation}/>
            ))}
        </ScrollView>
        <Random navigation={navigation} foodlist={foodList}/>
        </View>
        </>

    )
}

const style = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight: 700,
        marginVertical:8,
        color:"#151B54",
    },
    list:{
        width:'100%',
        //borderColor:'red',
        //borderWidth: 2,
    },
    container:{
        flex: 1,
        backgroundColor: 'skyblue',
        marginTop: 56,
        width: '100%',
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingHorizontal:16,
    },
})
