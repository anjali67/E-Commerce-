import { View, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SearchIcon } from '../../../assets/icons/search'
import appColors from '../../../theme/appColors'
import { FilterIcon } from '../../../assets/icons/filter'
export default function Search() {
  return (
    <View style={styles.conatiner}>
        <View style={styles.inputContainer}>
          <SearchIcon/>
        <TextInput placeholderTextColor={appColors.placeholder} placeholder='Search...' style={styles.serachInput}/>
        </View>
         <View style={styles.filterView}>
              <FilterIcon/>
         </View>
    </View>
  )
}