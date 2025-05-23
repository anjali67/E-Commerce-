import Svg, {Path} from 'react-native-svg';
import React from 'react';
export function HeartIcon(props) {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill={props.color} xmlns="http://www.w3.org/2000/Svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.16529 4.82183C0.688355 3.33281 1.24574 1.63087 2.809 1.12727C3.6313 0.861908 4.53895 1.01837 5.22257 1.53264C5.8693 1.03259 6.81028 0.863686 7.63169 1.12727C9.19495 1.63087 9.75589 3.33281 9.2794 4.82183C8.53711 7.18205 5.22257 9 5.22257 9C5.22257 9 1.93247 7.20961 1.16529 4.82183Z" stroke={props.color ? props.color : "white"} stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M7.00049 2.64551C7.47609 2.7993 7.81212 3.22378 7.85257 3.72205" stroke={props.color ? props.color : "white"} stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  );
}



