import { View, Text ,FlatList,TouchableOpacity,Image} from 'react-native'
import React , {useState} from 'react'
import styles from './styles';
import { categories } from '../../../utills/json';
import appColors from '../../../theme/appColors';

export default function Categories() {
    const [selectedCategory, setCategory] = useState(0);

    const onCategoryClick = category => {
      setCategory(category);
    };
  return (
    <View style={styles.mainView}>
    <FlatList
      data={categories}
      inverted={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({index, item}) => {
        return (
          <View style={styles.mainContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                onCategoryClick(index);
              }}
              style={styles.container}>
              <Image
                source={item.image}
                style={[
                  styles.image,
                  {borderWidth: selectedCategory == index ? 1.6 : 0},
                ]}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      selectedCategory == index
                        ? appColors.black
                        : appColors.gray,
                   
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  </View>
  )
}