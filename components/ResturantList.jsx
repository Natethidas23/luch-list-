import { useState, useEffect } from "react"
import {View,Text,ScrollView,StyleSheet} from "react-native"
import RestaurantCard from "./ResturantCard"
export default function ResturantList(){
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
        <Text style={style.title}>Restaurant List</Text>
        <ScrollView style={style.list}>
            {foodList && foodList.map(food => (
                <RestaurantCard food={food} key={food.id}/>
            ))}
        </ScrollView>
        </View>
        </>

    )
}

const style = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight: 700,
        color:"#151B54",
    },
    list:{
        width:'100%',
        //borderColor:'red',
        //borderWidth: 2,
    },
    container:{
        flex: 1,
        //backgroundColor: 'pink',
        marginTop: 56,
        width: '90%',
        alignItems:'center',
        justifyContent: 'center',
    },
})
