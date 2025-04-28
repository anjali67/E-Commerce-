import { View , Animated } from 'react-native'
import React , {useEffect} from 'react'
import { styles } from './styles'
import LottieView from 'lottie-react-native'

export default function OnBoarding({navigation}) {
    const logoScaleAnimation = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(logoScaleAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
    
        setTimeout(() => {
          navigation.replace('BottomTab');
        }, 2000);
      }, [logoScaleAnimation, navigation]);

  return (
    <View style={styles.container}>
        <Animated.View
        style={[
          styles.logoContainer,
          {transform: [{scale: logoScaleAnimation}]},
        ]}>
       <LottieView source={require('../../assets/gif/logo.json')} autoPlay loop style={styles.logo} />
        </Animated.View>
    </View>
  )
}