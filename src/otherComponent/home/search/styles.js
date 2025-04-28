import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

export const styles = StyleSheet.create({
    conatiner:{
        marginTop:windowHeight(20),
        flexDirection:"row",
        alignItems:"center",
    },
    inputContainer:{
        backgroundColor:appColors.serach,
        width:windowWidth(360),
        borderRadius:windowWidth(30),
        padding:windowHeight(3),
        paddingHorizontal:windowHeight(20),
        flexDirection:"row",
        alignItems:"center",   
    },
    serachInput:{
        flex:1,
        paddingHorizontal:windowWidth(20)
    },
    filterView:{
        height:windowHeight(32),
        width:windowHeight(32),
        backgroundColor:appColors.black,
        marginHorizontal:windowWidth(18),
        borderRadius:windowHeight(20),
        alignItems:"center",
        justifyContent:"center"
        
    }
})