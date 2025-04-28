import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, saveQuantity, loadQuantity } from '../../../../redux/quantitySlice';
import appColors from '../../../../theme/appColors';

export default function IncrementDecrement(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); 

  const quantityData = useSelector(state => state.quantity.quantities[props.item.id]);
  const quantity = quantityData ? quantityData.quantity : 1;

  useEffect(() => {
    dispatch(loadQuantity()).then(() => {
      setIsLoading(false); 
    });
  }, [dispatch]);

  const handleIncrement = () => {
    dispatch(increment({ productId: props.item.id, price: props.item.price }));
    dispatch(saveQuantity());
  };

  const handleDecrement = () => {
    dispatch(decrement({ productId: props.item.id, price: props.item.price }));
    dispatch(saveQuantity());
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={appColors.gray} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.incrementView}>
        <Text style={styles.textStyle}>−</Text>
      </TouchableOpacity>
      <Text>{quantity}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.incrementView}>
        <Text style={styles.textStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
