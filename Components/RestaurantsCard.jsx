import { View, Text ,TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'
import { ThemeColors } from '../Theme/Index'
import tw from 'twrnc';
import * as Icon from "react-native-feather";

const RestaurantsCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
       <View style={[{
        shadowColor:ThemeColors.bgColor(0.2)
       },tw`mr-6 bg-white rounded-3xl shadow-lg`]} >
        <Image style={tw`h-36 w-64 rounded-t-3xl`} source={require('../assets/restaurants/combo.webp')}/>
        <View style={tw`px-3 pb-4 space-y-2`}>
             <Text style={tw`text-lg font-bold pt-2`}>
                {item.name}

             </Text>
             <View style={tw`flex-row items-center space-x-1`}>
                <Image source={require('../assets/fullStar.png.png')} style={tw`h-4 w-4`}/>
                <Text style={tw`text-xs`}>
                    <Text style={tw`text-green-700`}>
                        {item.stars}

                    </Text>
                    <Text style={tw`text-gray-700`}>
                     ({item.reviews} reviews) . <Text style={tw`font-semibold`}>{item.category}</Text> 


                    </Text>

                </Text>
             </View>
<View style={tw`flex-row items-center space-x-1`}>
    <Icon.MapPin color="gray" width="15" height="15"/>
    <Text style={tw`text-gray-700 text-xs`}>
        Nearby . {item.address}

    </Text>
    
    
   

</View>
        </View>

       </View>
    
    </TouchableWithoutFeedback>
  )
}

export default RestaurantsCard