import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import appFonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
    container:{
        marginTop:windowHeight(20)
    },
    image:{
        height:windowHeight(140),
        width:windowWidth(350), 
    },
    contentContainerStyle:{
        marginHorizontal:windowWidth(10)
    },
    banner:{
        paddingTop:windowHeight(10),
        paddingHorizontal:windowHeight(20)
    },
      textStyle:{
            marginTop:windowHeight(8),
            color:appColors.black,
            fontFamily:appFonts.RobotoMedium,
            fontSize:fontSizes.FONT26,
            fontWeight:"bold"
        },
        title:{
            marginTop:windowHeight(5),
            color:appColors.black,
            fontFamily:appFonts.RobotoRegular,
            fontSize:fontSizes.FONT23,
             fontWeight:"500"
        },
        code:{
            marginTop:windowHeight(10),
            color:appColors.subTitle,
            fontFamily:appFonts.RobotoRegular,
            fontSize:fontSizes.FONT14,
             fontWeight:"700"
        },
        button:{
            height:windowHeight(23),
            width:windowWidth(100),
            backgroundColor:appColors.black,
            marginTop:windowHeight(10),
            borderRadius:windowWidth(20),
            justifyContent:"center"
            
        },
        btnStyle:{
            color:appColors.white,
            fontSize:fontSizes.FONT14,
            alignSelf:"center",
           
        }
   
})