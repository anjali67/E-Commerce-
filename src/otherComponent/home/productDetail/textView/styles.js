import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";
import appFonts from "../../../../theme/appFonts";

export const styles = StyleSheet.create({
    container:{
        marginTop:windowHeight(20)
    },
      textStyle:{
                 color:appColors.black,
                 fontFamily:appFonts.RobotoMedium,
                 fontSize:fontSizes.FONT22,
                 fontWeight:"bold",
                 marginBottom:windowHeight(6)
             },
             row:{
              flexDirection:"row",
              justifyContent:"space-between"
             },
             category:{
               
                color:appColors.gray,
                fontWeight:"500",
               
             },
             product: {
                marginTop: windowHeight(12),
                marginHorizontal: windowWidth(20),
                paddingBottom: windowHeight(2),
                borderTopColor: appColors.verticalLine,
                borderTopWidth: 1,
              },
              manufacturer: {
                paddingVertical: windowHeight(4),
              
              },
              optionView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              txt: {
                fontSize: fontSizes.FONT19,
                fontFamily: appFonts.MontserratMedium,
                color: appColors.black,
                marginTop: windowHeight(9),
                fontWeight:"bold"
              },
              title: {
                fontSize: fontSizes.FONT18,
                color: appColors.gray,
                marginTop: windowHeight(7),
                lineHeight: windowHeight(18),
              },
              minusView:{
                padding:windowHeight(7),
                paddingHorizontal:windowHeight(10),
                marginTop:windowHeight(6)
              }
})