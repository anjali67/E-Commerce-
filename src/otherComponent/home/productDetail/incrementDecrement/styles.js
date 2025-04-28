import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";
import {fontSizes, windowHeight} from '../../../../theme/appConstant'
export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:appColors.white,
        marginTop:windowHeight(4),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:windowHeight(8)
    },
    incrementView:{
       marginHorizontal:windowHeight(4),
       paddingHorizontal:windowHeight(8)
    },
    textStyle:{
        fontSize:fontSizes.FONT20,
        fontWeight:"400"
    }
})