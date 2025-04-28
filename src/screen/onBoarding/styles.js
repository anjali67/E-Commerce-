import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import { windowHeight , windowWidth , fontSizes } from "../../theme/appConstant";
 

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:appColors.white
    },
    logo:{
        height:windowHeight(130),
        width:windowHeight(130),
        resizeMode:"contain"
    },
    logoContainer: {
        alignItems: 'center',
      },
})