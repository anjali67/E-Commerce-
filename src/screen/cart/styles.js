import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import {  windowHeight, windowWidth } from "../../theme/appConstant";

export const styles = StyleSheet.create({
      container: {
      flex: 1,
      padding: 10,
      paddingTop:windowHeight(50),
      paddingHorizontal:windowWidth(30),
      backgroundColor:appColors.white
    
    },
    contentContainerStyle:{
      marginTop:windowHeight(5),
      paddingBottom:windowHeight(100)
    },
    itemContainer: {
      flexDirection: 'row',
      backgroundColor:appColors.mainView,
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
      elevation: 3,
      marginVertical:windowHeight(10),
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    details: {
      flex: 1,
      marginLeft: 10,
    },
    rowView:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 14,
      color: 'gray',
      fontWeight:"bold"
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    button: {
      backgroundColor: '#ddd',
      padding: 5,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    quantity: {
      fontSize: 16,
    },
    totalPrice: {
      fontSize: 14,
      color: '#333',
      marginTop: 5,
    },
   
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18,
      color: appColors.black,
      fontWeight:"bold"
    },
  });
