import Nerv from "nervjs";
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { View } from '@tarojs/components';
import { View, Image } from '@tarojs/components';
import keybordDel from './keybordDel.jpg';
import AtComponent from "./common/component";
import './index.less';

const keydata = [
  {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0',
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z'
  },
  {
    京: '京',
    津: '津',
    沪: '沪',
    渝: '渝',
    苏: '苏',
    浙: '浙',
    豫: '豫',
    粤: '粤',
    川: '川',
    陕: '陕',
    冀: '冀',
    辽: '辽',
    吉: '吉',
    皖: '皖',
    闽: '闽',
    鄂: '鄂',
    湘: '湘',
    鲁: '鲁',
    晋: '晋',
    黑: '黑',
    赣: '赣',
    贵: '贵',
    甘: '甘',
    桂: '桂',
    琼: '琼',
    云: '云',
    青: '青',
    蒙: '蒙',
    藏: '藏',
    宁: '宁',
    新: '新'
  }
];
export default class Keyboard extends AtComponent {

  render() {
    const className = this.props.className || '';
    const disabledata = this.props.disableKey || '';
    const obj = keydata[this.props.data || 0];
    const arry = Object.keys(obj);
    const show = this.props.show || false;
    const selectcallback = this.props.selectcallback;
    const confirmcallback = this.props.confirmcallback;
    const click = (e, value) => {
      if (e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      selectcallback(value);
    };
    const ok = e => {
      if (e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      confirmcallback();
    };
    const mid = (
      <View  
      className={classNames(
        ['keybord', show ? 'show' : null].join(' '),
        className
      )} >
        <View className={['keybordul', show ? 'show' : null].join(' ')}>
          {arry.map((value, index) => {
            const va = obj[value];
            if (disabledata.includes(value)) {
              return (
                <View className='li' key={value}>
                  <View className='div disableClass'>{value}</View>
                </View>
              );
            }
            return (
              <View className='li' key={value} onClick={e => click(e, `${va}`)}>
                <View className='div'>{value}</View>
              </View>
            );
          })}
          <View className='buttons li div'>
            <View className='buttonsdiv '>
              <Image
                className='firstbutton div'
                onClick={e => click(e, '-1')}
                src={keybordDel}
              />

              <View className='secondbutton div' onClick={e => ok(e)}>
                确定
              </View>
            </View>
          </View>
        </View>
      </View>
    );
    return mid;
  }
}