import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screen/onBoarding';
import BottomTab from './bottomTab';
import ProductDetail from '../otherComponent/home/productDetail';
import ProductList from '../otherComponent/home/product/productList';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}