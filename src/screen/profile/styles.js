import { StyleSheet } from "react-native"
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant"
import appColors from "../../theme/appColors"
import appFonts from "../../theme/appFonts"
export const styles = StyleSheet.create({
  mainContainer: {
          flex: 1,
          padding: 10,
          paddingTop:windowHeight(50),
          paddingHorizontal:windowWidth(30),
          backgroundColor:appColors.white
        },
        blankView: {
          height: windowHeight(10),
        },
        center: {
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: windowHeight(20),
        },
        userProfile: {
          width: windowWidth(100),
          height: windowHeight(72),
          borderRadius: windowHeight(50),
          marginLeft: windowWidth(16),
          marginTop: windowHeight(10),
        },
        name: {
          fontSize: fontSizes.FONT20,
          color: appColors.black,
          marginTop: windowHeight(12),
        },
        email: {
          fontSize: fontSizes.FONT19,
          color: appColors.gray,
          marginTop: windowHeight(6),
        },
        container: {
          flex: 1,
          backgroundColor: appColors.white,
        },
        profileView: {
          margin: windowHeight(20),
          alignItems: 'center',
        },
        image: {
          height: windowHeight(68),
          width: windowWidth(100),
          borderRadius: windowHeight(100),
          resizeMode: 'contain',
        },
        textStyle: {
          marginTop: windowHeight(8),
          fontFamily: appFonts.PublicSansRegular,
          fontSize: fontSizes.FONT19,
        },
        mail: {
          marginTop: windowHeight(5),
          fontSize: fontSizes.FONT18,
        },
        rowContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginHorizontal: windowWidth(10),
          marginVertical: windowHeight(6),
        },
        imageStyle: {
          height: windowHeight(15),
          width: windowWidth(25),
          resizeMode: 'contain',
        },
        title: {
          fontSize: fontSizes.FONT19,
          marginHorizontal: windowWidth(18),
          color: appColors.black,
        },
        seperator: {
          width: '90%',
          backgroundColor: appColors.verticalLine,
          alignSelf: 'center',
          height: windowHeight(1.5),
        },
})