# taro-keyboard-car

## 介绍

 本项目是基于Taro
 是一个中国的车牌号键盘，可以输入省份简称和字母数字
 欢迎大家来玩，源码github地址：https://github.com/zhangyihome/taro-keyboard-car

## 使用

npm i taro-keyboard-car

在运行本项目前，确保系统已经全局安装了taro，

车牌号键盘  

示例 

import Keyboard from 'taro-keyboard-car'

<Keyboard show data={0} disableKey={'1,2,3,4'} selectcallback={e=>{console.log(e)}} confirmcallback={e=>{console.log(e)}}/>



参数
1 data必须 键盘类型，0位字母和数字，1为省份，

2 disablekey 非必须，灰色的不可输入按钮

3 selectcallback 按键选择响应函数 必须 fun

4 show 是否显示键盘

