import { View, Text, TouchableOpacity,ScrollView, Image } from 'react-native'
import React from 'react'
import FeaturedRows from './FeaturedRows'
import tw from 'twrnc';
import * as Icon from "react-native-feather";
import { ThemeColors } from '../Theme/Index';
import { useNavigation } from '@react-navigation/native';
const CartScreen = () => {
  const restaurant = Featur.restaurant[0];
  const navigation = useNavigation();
  
  return (
    <View style={tw`bg-white flex-1`}>
     {/* back button */}
     <View
     style={tw`relative py-4 shadow-sm`}
     >
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      style={[{backgroundColor:ThemeColors.bgColor(1)},tw`absolute z-10 rounded-full p-1 shadow top-5 left-2`]}
      >
         <Icon.ArrowLeft strokeWidth={3} stroke="white"/>   
      </TouchableOpacity>
         <View
         
         >
             <Text
             style={tw`text-center font-bold text-xl`}
             >
                      Your cart
             </Text>
             <Text style={tw`text-center text-gray-500`}>{restaurant.name}</Text>

         </View>
     </View>
      {/* delivery time */}
      <View
      style={[{backgroundColor:ThemeColors.bgColor(0.2)},tw`flex-row px-4 items-center`]}
      >
         <Image
         source={require('../assets/restaurants')}
         style={tw`w-20 h-20 rounded-full`}
         
         />
         <Text style={tw`flex-1 pl-4`}> Deliver in 20-30 minutes</Text>
         <TouchableOpacity>
          <Text
          style={[{color:ThemeColors.text},tw`font-bold`]}
          >
            Change

          </Text>

         </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
      showVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:50
        }}
        style={tw`bg-white pt-5`}
      >
        {
          Resturant.dishes.map((dish,index)=>{
            return(
              <View
              key={index}
              style={[tw`space-x-3`,tw`flex-row items-center py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md`]}
              >
                <Text style={[tw`font-bold`,{color:ThemeColors.text}]}>

                  2 x
                </Text>
                <Image
                style={tw`h-14 w-14 rounded-full`}
                source={dish.image}
                />
                <Text style={tw`flex-1 font-semibold text-gray-700`}>{dish.name}</Text>


              </View>
            )
          })
        }

      </ScrollView>
    </View>
  )
}

export default CartScreen