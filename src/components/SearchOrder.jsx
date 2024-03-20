import React, { useState } from 'react'
import { View, Image, Text, Pressable, TextInput } from 'react-native'
import { orderDetails } from './Request'
import Toast from 'react-native-toast-message'

const SearchOrder = ({ searchResults, setSearchResults}) => {
    const [searchKey, setSearchKey] = useState("")

    const handleSearch = async () => {
        try {
            const response = await orderDetails(searchKey);
            if (response.data === undefined) {
                Toast.show({
                    type: 'error',
                    text1: "Order doesn't exist"
                });
            } else {
                setSearchResults(response.data);
            }
        } catch (error) {
            Toast.show({
                type:'error',
                text1: "Order doesn't exist"
            })
            console.error('Error fetching data:', error);
        } finally {
            setSearchKey("")
        }
    }


  return (
    <View className="relative bg-[#4CA7A8] p-5 rounded-lg mt-5">
    <Image
        source={require("../../assets/vector.png")}
        className="absolute top-0 right-0"
    />
    <Text className="font-medium text-xl text-white">Track your parcel</Text>
    <Text className="mt-2 text-white">Enter your parcel tracking number</Text>
    <View className="flex-row mt-5">
        <View className='relative w-8/12'>
            <View className="absolute z-10 inset-y-0 left-0 flex items-center pointer-events-none p-3">
                <Image className="" source={require('../../assets/search.png')} />
            </View>
            <TextInput
                className="bg-white block p-2 px-8 w-full text-sm border rounded-lg" 
                placeholder='Enter Tracking Number'
                value={searchKey}
                // onChangeText={setSearchKey}
                onChangeText={(text) => setSearchKey(text)} 
            />
        </View>
        <View className="ml-1">
            <Pressable 
                onPress={() => handleSearch()} 
                className="bg-[#00635C] rounded-lg p-2.5 text-sm"
            >
                <Text className="text-white">Search Package</Text>
            </Pressable>
        </View>
    </View> 
    </View>
  )
}

export default SearchOrder