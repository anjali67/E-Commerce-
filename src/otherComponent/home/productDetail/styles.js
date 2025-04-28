import { StyleSheet } from "react-native";
import { windowHeight , windowWidth } from "../../../theme/appConstant";
export const styles = StyleSheet.create({
  conatiner:{
    paddingTop:windowHeight(50),
    paddingHorizontal:windowWidth(30),
   },
         img: {
            height: windowHeight(350),
            width: windowWidth(420),
            borderRadius: windowHeight(8),
            resizeMode: 'cover',
            marginTop:windowHeight(15)
          },
          minus:{
            backgroundColor:"red"
          },
          contentContainerStyle:{
            paddingBottom:windowHeight(120)
          }
})