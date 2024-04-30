import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ThemeColors } from '../Theme/Index'
import RestaurantsCard from './RestaurantsCard'
import tw from 'twrnc';
import FeaturedData from '../Components/FeaturedData.json'

const FeaturedRows = ({title,description,restaurants}) => {
  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
            <Text style={tw`font-bold text-lg`}>
                {title}

            </Text>
            <Text style={tw`text-gray-500 text-xs`}>
                {description}

            </Text>
            <TouchableOpacity>
                <Text style={[{color:ThemeColors.text},tw`font-semibold`]} >See All</Text>
            </TouchableOpacity>

        </View>
        <ScrollView contentContainerStyle={{
            paddingHorizontal:15
        }} horizontal showsHorizontalScrollIndicator={false}  style={tw`overflow-visible py-5`}>
            {
                FeaturedData?.Featured?.restaurants.map((restuarant,index)=>{
                    return (
                        <RestaurantsCard
                        item={restuarant}
                        key={index}
                        />
                    )
                })
            }
        

        </ScrollView>

      </View>
    </View>
  )
}

export default FeaturedRows