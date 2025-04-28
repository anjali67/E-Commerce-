import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { CheckOutIcon } from '../../assets/icons/checkoutIcon'

export default function Checkout(props) {
  return (
  <View style={styles.container}>
       <View style={styles.row}>
       <Text style={styles.totalItems}>Total: { '(' + props.totalCartItems + ' ' + 'item' + ')' } :</Text>
       <Text style={styles.grandPrice}> ${props.grandTotal.toFixed(2)}</Text> 
       </View>
          <View style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
           <TouchableOpacity activeOpacity={0.7} style={styles.main}> 
            <CheckOutIcon/>
            </TouchableOpacity>
          </View> 
        </View>
  )
}