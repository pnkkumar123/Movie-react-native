import { View, Text, TouchableOpacity,ScrollView, Image } from 'react-native'
import React from 'react'
import FeaturedRows from './FeaturedRows'
import tw from 'twrnc';
import * as Icon from "react-native-feather";
import { ThemeColors } from '../Theme/Index';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slice/ResturantSlice';
const CartScreen = () => {
  const restaurant = useSelector(selectRestaurant)
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
                <Text style={tw`font-semibold text-base`}>${dish.price}</Text>
                <TouchableOpacity
                style={[tw`p-1 rounded-full`,{backgroundColor:ThemeColors.bgColor(1)}]}
                >
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
                </TouchableOpacity>


              </View>
            )
          })
        }

      </ScrollView>
      {/* totals */}
      <View
      style={[tw`p-6 px-8 rounded-t-3xl `,tw`space-y-4`,{backgroundColor:ThemeColors.bgColor(0.2)}]}
>
           <View
           style={tw`flex-row justify-between`}
           >
            <Text
            style={tw`text-gray-700`}
            >
              SubTotal

            </Text>
            <Text
            style={tw`text-gray-700`}
            >
              $20

            </Text>
            </View>        
           <View
           style={tw`flex-row justify-between`}
           >
            <Text
            style={tw`text-gray-700`}
            >
             Delivery fee

            </Text>
            <Text
            style={tw`text-gray-700`}
            >
              $2

            </Text>
            </View>        
           <View
           style={tw`flex-row justify-between`}
           >
            <Text
            style={tw`text-gray-700 font-extrabold`}
            >
              Order Total

            </Text>
            <Text
            style={tw`text-gray-700 font-extrabold`}
            >
              $30

            </Text>
            </View>        
          <View
          
          >
             <TouchableOpacity
             onPress={()=>navigation.navigate('OrderPreparing')}
             style={[{backgroundColor:ThemeColors.bgColor(1)},tw`p-3 rounded-full`]}
             >
               <Text
               style={tw`text-white text-center font-bold text-lg`}
               >
                Place Order
               </Text>
             </TouchableOpacity>
          </View>

    </View>

    </View>
  )
}

export default CartScreen