import { View, Text ,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { ThemeColors } from '../Theme/Index'

const RestaurantsCard = () => {
  return (
    <TouchableWithoutFeedback>
       <View style={{
        shadowColor:ThemeColors.bgColor(0.2)
       }} className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={ImInsertTemplate.image}/>
        <View className="px-3 pb-4 space-y-2">
             <Text className="text-lg font-bold pt-2">
                {item.name}

             </Text>
             <View className="flex-row items-center space-x-1">
                <Image source={require('../a')} className="h-4 w-4"/>
                <Text className="text-xs">
                    <Text className="text-green-700">
                        {item.stars}

                    </Text>
                    <Text className="text-gray-700">
                     ({item.reviews} reviews) . <Text className="font-semibold">{Item.category}</Text> 


                    </Text>

                </Text>
             </View>
<View className="flex-row items-center space-x-1">
    <Icon.MapPin color="gray" width="15" height="15"/>
    <Text className="text-gray-700 text-xs">
        Nearby . {item.address}

    </Text>
    
    
   

</View>
        </View>

       </View>
    
    </TouchableWithoutFeedback>
  )
}

export default RestaurantsCard