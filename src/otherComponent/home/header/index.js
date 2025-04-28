import { View, Image,Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {MenuIcon} from '../../../assets/icons/menu'
import appColors from '../../../theme/appColors'

export default function Header() {
  return (
    <View style={styles.mainContainer}>
 <View style={styles.container}>
         <View style={styles.main}>
             <MenuIcon/>
         </View>
         <View style={styles.mainView}>
             <Image source={require('../../../assets/images/person.png')} style={styles.image}/>
         </View>
    </View>
    <Text style={styles.textStyle}>Welcome,</Text>
    <Text style={[styles.textStyle,{color:appColors.subTitle,marginTop:4}]}>Our E-Commerce App</Text>
    </View>
   
  )
}