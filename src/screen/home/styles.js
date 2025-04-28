import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import { windowHeight } from "../../theme/appConstant";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.white,
        paddingHorizontal:windowHeight(18)
    },
})