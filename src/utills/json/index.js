import Address from '../../assets/icons/address';
import { HeartIcon } from '../../assets/icons/heart';
import Notification from '../../assets/icons/notification';
import Order from '../../assets/icons/order';
import Payment from '../../assets/icons/payment';
import Settings from '../../assets/icons/settings';
import appColors from '../../theme/appColors';
export const Data = [
    {
        discount:"70%",
        title:"On everything today",
        code:"FSCREATION",
        image:require('../../assets/images/carousel.png')
    },
    {
        discount:"50%",
        title:"On everything today",
        code:"FSCREATION",
        image:require('../../assets/images/carousel1.png')
    }
]

export const categories = [
    {
      title: 'Women',
      image: require('../../assets/images/categories1.png'),
    },
    {
      title: 'Men',
      image: require('../../assets/images/categories2.png'),
    },
    {
      title: 'Kids',
      image: require('../../assets/images/categories3.png'),
    },
    {
      title: 'Beauty',
      image: require('../../assets/images/categories4.png'),
    },
    {
      title: 'Home',
      image: require('../../assets/images/categories5.png'),
    },
  ];

  export const profileMenuItems = [
    {
      title: 'Orders',
      icon: <Order/>,
    },
    {
      title: 'Payment',
      icon: <Payment />,
    },
    {
      title: 'Saved Address',
      icon: <Address />,
      
    },
    {title: 'Langauge', icon: '', route: ''},
    {
      title: 'Notification',
      icon: <Notification />,
    },
    {
      title: 'Settings',
      icon: <Settings />,
    },
  ];