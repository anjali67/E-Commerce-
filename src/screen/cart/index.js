import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, removeFromCart, saveCart } from '../../redux/cartSlice'; 
import { styles } from './styles';
import IncrementDecrement from '../../otherComponent/home/productDetail/incrementDecrement';
import Header from '../../otherComponent/header'
import {getTotalPrice} from '../../utills/cartUtils'
import Checkout from '../../otherComponent/checkout';
import { Delete } from '../../assets/icons/delete';
export default function Cart() {
  const dispatch = useDispatch();
  const cartObject = useSelector((state) => state.cart.cartItems);
  const cartItems = Object.values(cartObject);
  const quantities = useSelector(state => state.quantity.quantities);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const grandTotal = cartItems.reduce((acc, item) => {
    const totalPrice = getTotalPrice(item.productData, quantities);
    return acc + totalPrice;  
  }, 0);

  const renderItem = ({ item }) => {
    const totalPrice = getTotalPrice(item.productData, quantities);
return (
  <View  style={styles.itemContainer}>
      <Image source={{ uri: item.productData.image }} style={styles.image} />
      <View style={styles.details}>
     <Text style={styles.title}>{item.productData.title}</Text> 
        <View style={styles.quantityContainer}>
         <IncrementDecrement item={item.productData} />
        </View>
        <View style={styles.rowView}>
        <Text style={styles.totalPrice}>Total: $ <Text style={styles.price}>{totalPrice.toFixed(2)}</Text></Text>
        <TouchableOpacity onPress={() => 
  {
    dispatch(removeFromCart({productId : item.productData.id}))
     dispatch(saveCart()); 
    }} activeOpacity={0.5}>
   <Delete/>
   </TouchableOpacity >
        </View>
      </View>
    </View>
) 
  };

  return (
    <View style={styles.container}>
      <Header  title={'MyCart'}/>
       <Checkout totalCartItems = {cartItems.length} grandTotal={grandTotal} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No items in cart.</Text>}
      />
    </View>
  );
}

