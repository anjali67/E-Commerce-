import { Text, TouchableOpacity, View, LayoutAnimation, NativeModules } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { Increase } from '../../../../assets/icons/increase';
import IncrementDecrement from '../incrementDecrement';
import { renderStars } from '../../../../utills/cartUtils';

export default function TextView(props) {
  const [showProductDesc, setShowProductDesc] = useState(true);
  const { UIManager } = NativeModules;

  // Use useEffect to ensure LayoutAnimation is enabled only once on component mount
  useEffect(() => {
    if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [UIManager]);

  const showValue = (product) => {
    LayoutAnimation.easeInEaseOut();
    setShowProductDesc(product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.item.title}</Text>
      <View style={styles.row}>
      <Text style={styles.textStyle}>
        Category: <Text style={styles.category}> {props.item.category}</Text>
      </Text>
      <IncrementDecrement item={props.item} />
      </View>
    <Text>Rating: {renderStars(props.item.rating.rate)} ({props.item.rating.count} reviews)</Text>
      <View style={styles.manufacturer}>
        <TouchableOpacity
          onPress={() => showValue(!showProductDesc)}
          activeOpacity={0.7}
          style={styles.optionView}>
          <Text style={styles.txt}>Description</Text>
          <View>
            {showProductDesc ? (
              <View style={styles.minusView}>
                <Text style={styles.minus}>－</Text>
                </View>
            ) : (
             <View style={styles.minusView}>
                 <Increase height={'12'} />
                </View>
            )}
          </View>
        </TouchableOpacity>
        {showProductDesc && <Text style={styles.title}>{props.item.description}</Text>}
      </View>
    </View>
  );
}
