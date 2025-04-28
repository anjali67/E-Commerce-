import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { fontSizes , windowHeight } from "../../../theme/appConstant";
export const styles = StyleSheet.create({
       
        main:{
          flex: 1,
          backgroundColor:appColors.white,
          paddingHorizontal:windowHeight(20),
          paddingTop:windowHeight(50),
        },
        blank:{
          height:windowHeight(20)
        },
        rowContainer:{
         flexDirection:"row",
         justifyContent:"space-between"
        },
        titleStyle:{
          fontWeight: 'bold',
          fontSize: fontSizes.FONT22,
          marginBottom:windowHeight(17),
          marginTop:windowHeight(15)
        },
        emptyText: {
          textAlign: 'center',
          marginTop: 20,
          color: '#888',
        },
        row:{
            flexDirection:"row"
        },
        list: {
            padding: 10,
          },
          card: {
            flexDirection:'column',
            backgroundColor:'#F2F2F2',
            marginBottom: windowHeight(25),
            borderRadius: 10,
            overflow: 'hidden',
            elevation: 5,
            marginRight:windowHeight(20),
            padding:windowHeight(6)
          },
          iconView:{
            alignItems:"flex-end",
            height:windowHeight(20),
            width:windowHeight(20),
            backgroundColor:appColors.black,
            borderRadius:windowHeight(10),
            alignItems:"center",
            justifyContent:"center",
            margin:windowHeight(10)
          },
          center:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
          },
          image: {
            width: windowHeight(70),
            height: windowHeight(90),
            resizeMode:'contain',
            marginHorizontal:windowHeight(5)
          },
          info: {
            // flex: 1,
            padding: 10,
          },
          title: {
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom:windowHeight(3)
          },
          price: {
            fontSize: 14,
            color: 'green',
            marginBottom: 5,
          },
          loadMoreButton: {
            padding: 12,
            backgroundColor: '#007bff',
            borderRadius: 5,
            alignItems: 'center',
            margin: 10,
          },
          loadMoreText: {
            color: 'white',
            fontSize: 16,
          },
      })
