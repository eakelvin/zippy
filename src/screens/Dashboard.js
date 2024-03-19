import React from 'react'
import { View, Text, SafeAreaView, TextInput, Pressable, Image } from 'react-native'

const Dashboard = () => {
  return (
    <SafeAreaView>
        <View className="mt-6 mx-5">
            <View>
                <Text className="font-medium text-lg">Hi Username,</Text>
                <Text className="mt-1 text-base">Track and monitor your packages</Text>
            </View>
            <View className="bg-[#4CA7A8] p-5 rounded-lg mt-5">
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
                        />
                    </View>
                    <View className="ml-1">
                        <Pressable className="bg-[#00635C] rounded-lg p-2.5 text-sm">
                            <Text className="text-white">Search Package</Text>
                        </Pressable>
                    </View>
                </View> 
            </View>
            <View className="flex-row justify-between items-center mt-6">
                <Text className="font-bold text-base">Latest Orders</Text>
                <Text className="text-green-500 font-bold">See All</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Dashboard