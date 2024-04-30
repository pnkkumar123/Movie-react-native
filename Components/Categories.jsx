import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { CategoriesData } from './FeaturedData';

// Import your category data


const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={tw`mt-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {/* Map through categoriesData instead of Categories */}
        {CategoriesData.categories.map((category, index) => {
          const isActive = category.name === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View key={index} style={tw`flex justify-center items-center mr-6`}>
                <TouchableOpacity
                onPress={()=>setActiveCategory(category.id)}
                style={[tw`p-1 rounded-full shadow bg-gray-200` + btnClass]} 
                >
                    <Image style={{width:45,height:45}}/>

                </TouchableOpacity>
                 <Text className={[tw`text-sm` + textClass]}>
                    {category.name}
                    </Text>   

            </View>
        )
    })
}

</ScrollView>

</View>
)
};

export default Categories;
