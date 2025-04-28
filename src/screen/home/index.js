import { SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../otherComponent/home/header'
import Search from '../../otherComponent/home/search'
import Banner from '../../otherComponent/home/banner'
import Categories from '../../otherComponent/home/categories'
import Product from '../../otherComponent/home/product'
export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <Banner />
      <Categories />
     <Product  navigation={navigation}/>  
  </SafeAreaView>

  )
}