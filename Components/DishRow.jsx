import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemeColors } from '../Theme/Index'
import * as Icon from "react-native-feather";


const DishRow = ({item}) => {
  return (
    <View
    style={tw`flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2`}
    >
      <Image style={[{height:100,width:100},tw`rounded-3xl`]} source={item.image}/>
    <View
    style={[tw`flex flex-1 `,tw`space-y-3`]}
    >
<View
style={tw`pl-3`}
>
    <Text
    style={tw`text-xl`}
    >
{item.name}
    </Text>
    <Text
    style={tw`text-gray-700`}
    >
{item.description}
    </Text>

</View>
<View
style={tw`flex-row justify-between pl-3 items-center`}
>
<Text
style={tw`text-gray-700 text-lg font-bold`}
>

$ {item.price}
</Text>
<View
style={tw`flex-row items-center`}
>
    <TouchableOpacity
    style={[{backgroundColor:ThemeColors.bgColor(1)},tw`p-1 rounded-full`]}
    >
       <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
    </TouchableOpacity>
    <Text style={tw`px-3`}>{2}</Text>
    <TouchableOpacity
    style={[{backgroundColor:ThemeColors.bgColor(1)},tw`p-1 rounded-full`]}
    >
       <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
    </TouchableOpacity>

</View>
</View>
    </View>
    </View>
  )
}

export default DishRow