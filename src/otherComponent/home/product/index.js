import {  Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchProducts, loadFavorites} from '../../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import appColors from '../../../theme/appColors';
import ProductListView from '../productList';

export default function Product({ navigation }) {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(loadFavorites());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color={appColors.gray} />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ProductListView
      mainStyle={{
          flex: 1,
         justifyContent:"center",
       
      }}
      navigation={navigation}
      title="New Arrivals"
      showViewAll={true}
      productsData={products.slice(0, visibleProducts)}
      onViewAllPress={() => navigation.navigate('ProductList')}
    />
  );
}
