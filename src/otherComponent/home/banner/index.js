import { View, Text, FlatList , ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './styles'
import {Data} from '../../../utills/json'

export default function Banner() {
  return (
    <View style={styles.container}>
     <FlatList
     horizontal
     showsHorizontalScrollIndicator={false} 
      data={Data}
      renderItem={({item}) => (
       <ImageBackground resizeMode={'stretch'} source={item.image} style={styles.image}>
          <View style={styles.banner}>
          <Text style={styles.textStyle} >{item.discount} Off</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.code}>Code:{item.code}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnStyle}>Get Now</Text>
          </TouchableOpacity>
          </View>
       </ImageBackground>
      )}
      ItemSeparatorComponent={() => <View style={styles.contentContainerStyle}/>}
     />
    </View>
  )
}