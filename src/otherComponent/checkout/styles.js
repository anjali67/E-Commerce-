import { StyleSheet } from "react-native"
import { windowHeight, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";
import { fontSizes } from "../../theme/appConstant";
export const styles = StyleSheet.create({
  container:{
    marginTop:windowHeight(15)
  },
    row:{
        flexDirection:"row",
        justifyContent:"space-between"
       },
       totalItems: {
         fontSize: 16,
         fontWeight: 'bold',
         color: appColors.gray,
         marginBottom: windowHeight(5),
       },
       checkoutButton: {
         backgroundColor: appColors.black,
         paddingVertical: windowHeight(10),
         borderRadius: 10,
         alignItems: 'center',
         flexDirection:"row",
         paddingHorizontal:windowWidth(20),
         marginVertical:windowHeight(4),
         justifyContent:"space-between"

       },
       checkoutText: {
         color: appColors.white,
         fontSize: fontSizes.FONT21,
         fontWeight: 'bold',
        
       },
       grandPrice:{
        fontSize:fontSizes.FONT22,
        fontWeight:"bold"
      },
      main:{
        height:windowHeight(30),
        width:windowHeight(30),
        backgroundColor:appColors.white,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:windowHeight(20)

      }
})