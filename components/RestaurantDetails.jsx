import { useContext } from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import { ResturantContext } from "../App";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function RestaurantDetails(){
    
    const{selectedResturant}=useContext(ResturantContext);

    return(
        <View styles={styles.main}>
            <Image source={{uri: selectedResturant.image}}/>
            <Text styles={styles.title}>{selectedResturant.name}</Text>
            <View>
                <Text>Cusine:{selectedResturant.cuisine}</Text>
                <Text>Rating: {selectedResturant.rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.addr}>{selectedResturant.address}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    meta:{
        width:'80%',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:16,

    }
    img:{
        width:420,
        height:200,
        borderRadius:6,
    },
    tiltle:{
        fontSize:32,
        fontWeight:700,
        marginVertical:16,
    },
    main:{
        flex: 1,
        backgroundColor:'tan',
        width:'100%',
        alignItems:'center',
        padding:16,
    }

})