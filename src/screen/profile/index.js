import { View, Text, Image,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'
import Header from '../../otherComponent/header'
import {profileMenuItems} from '../../utills/json'

export default function Profile() {
  return (
    <View  style={styles.mainContainer}>
       <Header  title={'Profile'}/>
      <View style={styles.blankView}/>
      <View>
        <View style={styles.center}>
          <Image source={require('../../assets/images/user.png')} style={styles.userProfile} />
          <Text
            style={styles.name}>
           paige Turner
          </Text>
          <Text style={styles.email}>
          paigeturner@gmail.com
          </Text>
        </View>
      <FlatList
        data={profileMenuItems}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.rowContainer}>
              { item.icon}
              <Text
                style={
                  styles.title}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() =>
            <View style={styles.seperator} />
        }
      />
    </View>
    </View>
  )
}