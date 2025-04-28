import {  ScrollView,Image ,SafeAreaView} from 'react-native'
import React from 'react'
import { styles } from './styles'
import TextView from './textView'
import AddToCart from './addToCart'
import Header from '../../header'
export default function ProductDetail({route,navigation}) {
    const {item} = route.params
  return (
    <>
   <SafeAreaView style={{flex:1}}>
     <ScrollView style={styles.conatiner} contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
        <Header showBackArrow={true} navigation={navigation} title={'Product Details'}/>
        <Image source={{uri:item.image}} style={styles.img}/>
        <TextView item={item}/>
    </ScrollView> 
    <AddToCart navigation={navigation} item={item} /> 
    </SafeAreaView>

    </>
   
  )
}