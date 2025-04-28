import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '../../theme/appColors';

export default Payment = props => {
  return (
    <Svg
      width={props.width ? props.width : '19'}
      height={props.height ? props.height : '19'}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M2.37492 2.375H16.6249C16.8349 2.375 17.0362 2.45841 17.1847 2.60687C17.3332 2.75534 17.4166 2.9567 17.4166 3.16667V15.8333C17.4166 16.0433 17.3332 16.2447 17.1847 16.3931C17.0362 16.5416 16.8349 16.625 16.6249 16.625H2.37492C2.16496 16.625 1.96359 16.5416 1.81513 16.3931C1.66666 16.2447 1.58325 16.0433 1.58325 15.8333V3.16667C1.58325 2.9567 1.66666 2.75534 1.81513 2.60687C1.96359 2.45841 2.16496 2.375 2.37492 2.375ZM15.8333 8.70833H3.16659V15.0417H15.8333V8.70833ZM15.8333 7.125V3.95833H3.16659V7.125H15.8333ZM11.0833 11.875H14.2499V13.4583H11.0833V11.875Z"
        fill={appColors.black}
      />
    </Svg>
  );
};
