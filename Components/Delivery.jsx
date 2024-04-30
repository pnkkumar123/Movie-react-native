import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import  tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { ThemeColors } from '../Theme/Index';
import * as Icon from "react-native-feather";

const Delivery = () => {
    const navigation = useNavigation();
    const restaurant = featured.restaurant[0];
  return (
    <View style={tw`flex-1`}>
      {/* map view */}
      <MapView
      initialRegion={{
        latitude:restaurant.lat,
        longitude:restaurant.lng,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
      style={tw`flex-1`}
      mapType='standard'
      >
        <Marker
        coodrinate={{
            latitude:restaurant.lat,
            longitude:restaurant.lng
        }}
        title={restaurant.name}
        description={restaurant.description}
        pinColor={ThemeColors.bgColor(1)}
        />
      </MapView>
      <View
      style={tw`rounded-t-3xl -mt-12 bg-white relative`}
      >
            <View
            style={tw`flex-row justify-between px-5 pt-10`}
            >
              <View>
                <Text
                style={tw`text-lg text-gray-700 font-semibold`}
                 >
                               Estimated Arrival
                </Text>
                <Text
                style={tw`text-3xl font-extrabold text-gray-700`}
                >
                 20-30 Minutes
                </Text>
                <Text
                style={tw`mt-2 text-gray-700 font--semibold`}
                >
                  Your order is own its way,
                </Text>
                <Image
                style={tw`w-24 h24`} source={require('../assets/images')}
                />

              </View>
              <View
              style={[{backgroundColor:ThemeColors.bgColor(0.8)},tw`p-2 flex-row justify-between items-center rounded-full my-5 mx-2`]}
              >
                <View
                style={[{backgroundColor:'rgba(255,255,255,0.4'},tw`p-1 rounded-full`]}
                >
                 <Image
                 
                 style={tw`h-16 w-16 rounded-full `}
                 source={require("../assets")}
                 />
                </View>
                <View
                style={tw`flex-1 ml-3`}
                >
                    <Text
                    style={tw`text-lg font-bold text-white`}
                    >
                    Pankaj Kumar
                    </Text>
                    <Text
                    style={tw`text-lg font-semibold text-white`}
                    >
                       Your Rider
                    </Text>

                </View>
                <View style={[tw`flex-row items-center mr-3`,tw`space-x-3`]}>
                    <TouchableOpacity
                    style={tw`bg-white p-2 rounded-full`}
                    >
                      <Icon.Phone fill={ThemeColors.bgColor(1)} stroke={'red'}  strokeWidth={5}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Home')}
                    style={tw`bg-white p-2 rounded-full`}
                    >
                      <Icon.X fill={ThemeColors.bgColor(1)} stroke={'red'}  strokeWidth={4}/>
                    </TouchableOpacity>

                </View>
              </View>
            </View>
      </View>
    </View>
  )
}

export default Delivery