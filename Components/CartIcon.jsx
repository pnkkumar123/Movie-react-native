import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { ThemeColors } from '../Theme/Index'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slice/CartSlice'


const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
 const cartTotal = useSelector(selectCartTotal)
  if(!cartItems.length) return ;
  return (
    <View style={tw`absolute bottom-5 w-full z-50`}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Cart')}
        style={[{backgroundColor:ThemeColors.bgColor(1)},tw`flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg`]}
        >
            <View
            style={[{backgroundColor:'rgba(255,255,255,0.3'},tw`p-2 px-4 rounded-full`]}
            >
                <Text
                style={tw`font-extrabold text-white text-lg`}
                >
                   {cartItems.length}
                </Text>
            </View>
                 <Text
                 style={tw`flex-1 text-center font-extrabold text-white text-lg`}
                 >
                   View Cart
                 </Text>
                 <Text
                 style={tw`font-extrabold text-white text-lg`}
                 >
                      ${cartTotal}
                 </Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default CartIcon