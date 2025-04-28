import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import fonts from "../../../theme/appFonts"

export const styles = StyleSheet.create({
    container:{
       
        flexDirection:"row",
        justifyContent:"space-between"
    },
    mainContainer:{
        paddingTop:windowHeight(70),
      
    },
    main:{
        height:windowHeight(30),
        width:windowHeight(30),
        backgroundColor:appColors.black,
        borderRadius:windowHeight(20),
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        height:windowHeight(40),
        width:windowHeight(40)
    },
    mainView:{
        height:windowHeight(40),
        width:windowHeight(40), 
        backgroundColor:appColors.lightGray,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:windowHeight(20),
    },
    textStyle:{
        marginTop:windowHeight(8),
        color:appColors.black,
        fontFamily:fonts.RobotoMedium,
        fontSize:fontSizes.FONT26,
        fontWeight:"bold"
    }
})