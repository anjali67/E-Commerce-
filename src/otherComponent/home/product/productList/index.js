import {  ActivityIndicator, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../../redux/productSlice';
import appColors from '../../../../theme/appColors';
import ProductListView from '../../productList';

export default function ProductList({ navigation }) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator size="large" color={appColors.gray} /></View>;
  if (error) return <Text>Error: {error}</Text>;
  return (
    <ProductListView
      navigation={navigation}
      title="All Products"
      showHeader={true}
      productsData={products}
    />
  );
}
