import { View, Text, ScrollView, TouchableOpacity, StatusBar,  } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { ThemeColors } from '../Theme/Index';
import DishRow from './DishRow';
import CartIcon from './CartIcon';


const ResturantsScreen = () => {
    const {params} = useRoute;
    let item = params;
    console.log(item)
  return (
    <View>
        <CartIcon/>
        <StatusBar style="light"/>
    <ScrollView>
        <View style={tw`relative`}>
            <Image style={tw`w-full h-72`} source={item.Image}/>
            <TouchableOpacity
            style={tw`absolute top-14 bg-gray-50 p-2 rounded-full shadow`}
            >
             <Icon.ArrowLeft strokeWidth={3} stroke={ThemeColors.bgColor(1)}/>

            </TouchableOpacity>

        </View>
        <View
        style={[{borderTopLeftRadius:40,borderTopRightRadius:40},tw`bg-white -mt-12 pt-6`]}
        >
          <View style={tw`px-5`}>
            <Text style={tw`text-3xl font-bold`}>
                {item.name}

            </Text>
             <View style={[tw`space-x-2`,tw`flex-row my-1`]}>
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
             <Text
             style={tw`text-gray-700 text-xs`}
             >
                 {item.description}
             </Text>

          </View>
        </View>
        <View
        style={tw`pb-36 bg-white`}
        >
         <Text
         style={tw`px-4 py-4 text-2xl font-bold`}
         >
            Menu

         </Text>
         {/* dishes */}
         {
            item.dishes.map((dish,index)=><DishRow item={{...dish}} key={index}/>)
         }
        </View>
    </ScrollView>
    </View>
  )
}

export default ResturantsScreen