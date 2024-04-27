import { View, Text, StatusBar,SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { ThemeColors } from '../Theme/Index';
import Categories from '../Components/Categories';
import FeaturedRows from '../Components/FeaturedRows';


const Screen = () => {
  return (
    <SafeAreaView className="bg-white">
     <StatusBar barStyle='dark-content'/>
     {/* search bar */}
     <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray"/>
            <TextInput placeholder='Restaurants' className="ml-2 flex-1 "/>
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.MapPin height="20" width="20" stroke="gray"/>
              <Text className="text-gray-600">
                New York, NYC

              </Text>

            </View>

        </View>
        <View style={{backgroundColor:ThemeColors.bgColor(1)}} className="p-3  rounded-full">
            <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>

        </View>

     </View>
     {/* main */}
     <ScrollView contentContainerStyle={{paddingBottom:20}} showsVerticalScrollIndicator={false}>
       {/* categories */}
       <Categories/>
{/* featured */}
<View className="mt-5">
    {
        [
            featured,featured,featured
        ].map((item,index)=>{
            return (
                <FeaturedRows
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                 description={item.description}
                />
            )
        })
    }

</View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Screen