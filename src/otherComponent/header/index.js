import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './styles'
import { BackArrow } from '../../assets/icons/backArrow'
export default function Header(props) {
  return (
    <View style={styles.header} >
        {props.showBackArrow && <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.goBack()}  style={styles.header}>
                <View style={styles.arrowView}><BackArrow/></View>
            </TouchableOpacity>}
            <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}