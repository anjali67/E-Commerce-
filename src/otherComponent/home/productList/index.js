import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, saveFavorites } from '../../../redux/productSlice';
import { styles } from './styles';
import { HeartIcon } from '../../../assets/icons/heart'
import appColors from '../../../theme/appColors';
import Header from '../../header'; 

export default function ProductListView({ 
  navigation, 
  title, 
  showViewAll = false, 
  showHeader = false, 
  productsData, 
  onViewAllPress,
  mainStyle
}) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.product);

  const handleFavoriteToggle = (itemId) => {
    dispatch(toggleFavorite(itemId));
    dispatch(saveFavorites());
  };

  const renderItem = ({ item }) => {
    const isFavorite = favorites.includes(item.id);
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('ProductDetail', { item })}
        style={styles.card}
      >
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <TouchableOpacity style={styles.iconView} onPress={() => handleFavoriteToggle(item.id)}>
            <HeartIcon color={isFavorite ? 'red' : 'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{item.title.split(' ')[0]}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={mainStyle ? mainStyle : styles.main}>
      {showHeader && <Header navigation={navigation} showBackArrow title={title} />}
      {showViewAll || title ? (
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
          {showViewAll && (
            <TouchableOpacity onPress={onViewAllPress}>
              <Text style={[styles.titleStyle, { color: appColors.gray }]}>View All</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : null}

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No products found</Text>}
        contentContainerStyle={{ paddingBottom: 120 }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
