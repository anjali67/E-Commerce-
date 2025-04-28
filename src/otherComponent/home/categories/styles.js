import {StyleSheet} from 'react-native';
import { fontSizes, windowHeight , windowWidth } from '../../../theme/appConstant';
import appColors from '../../../theme/appColors';
import appFonts from '../../../theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    borderRadius: windowWidth(26),
    marginTop:windowHeight(6)
  },
  image: {
    width: windowWidth(72),
    height: windowHeight(49),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(7),
    borderRadius: windowHeight(100),
    borderColor: appColors.black,
   
  },
  title: {
    fontSize: fontSizes.FONT18,
    color: appColors.subTitle,
    fontFamily: appFonts.RobotoRegular,
    bottom: windowHeight(6),
    alignSelf: 'center',
    marginTop: windowHeight(14),
    marginLeft: windowWidth(6),
  },
  mainContainer: {
    flex: 1,
  },
  mainView: {
  marginTop: windowHeight(16),
  },
});
