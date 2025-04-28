import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AddCartIcon } from '../../../../assets/icons/addCart'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, saveCart } from '../../../../redux/cartSlice'
import { getTotalPrice } from '../../../../utills/cartUtils';

export default function AddToCart(props) {
const quantities = useSelector(state => state.quantity.quantities);
const totalPrice = getTotalPrice(props.item, quantities);
const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart({
        productId: props.item.id,
        price: props.item.price,
        productData: props.item 
      }));
      dispatch(saveCart()); 
      props.navigation.navigate('BottomTab', { screen: 'Cart' })
    }

  return (
    <View style={styles.container}>
     <View style={styles.row}>
      <View>
        <Text style={styles.textStyle}>Total Price: </Text>
        <Text style={styles.price}>${totalPrice?.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => handleAddToCart()} style={styles.buttonView}>
        <AddCartIcon/>
        <Text style={styles.btnStyle}>Add To Cart</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}