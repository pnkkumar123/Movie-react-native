import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ThemeColors } from '../Theme/Index'
import RestaurantsCard from './RestaurantsCard'

const FeaturedRows = ({title,description,restaurants}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg">
                {title}

            </Text>
            <Text className="text-gray-500 text-xs">
                {description}

            </Text>
            <TouchableOpacity>
                <Text style={{color:ThemeColors.text}} className="font-semibold">See All</Text>
            </TouchableOpacity>

        </View>
        <ScrollView contentContainerStyle={{
            paddingHorizontal:15
        }} horizontal showsHorizontalScrollIndicator={false}  className="overflow-visible py-5">
            {
                restaurants.map((restuarant,index)=>{
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