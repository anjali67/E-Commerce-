import { StyleSheet } from "react-native"
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant"
import appColors from "../../theme/appColors"
import appFonts from "../../theme/appFonts"
export const styles = StyleSheet.create({
       header:{
        flexDirection:"row",
     },
     arrowView:{
        height:windowHeight(30),
        width:windowHeight(30),
        backgroundColor:appColors.black,
        borderRadius:windowHeight(20),
        alignItems:"center",
        justifyContent:"center",
        marginRight:windowWidth(30)
     },
      textStyle:{
             color:appColors.black,
             fontFamily:appFonts.RobotoMedium,
             fontSize:fontSizes.FONT26,
             fontWeight:"bold",
            
         },
})