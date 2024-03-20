import React, { useEffect, useState } from 'react'
import { 
    View, Text, SafeAreaView, TextInput, Pressable, Image, ScrollView, 
} from 'react-native'
import List from '../components/List'
import { userDetails } from '../components/Request'

const Dashboard = () => {
    const [username, setUsername] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await userDetails();
                setUsername(data.data.name);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData()
    }, [])


  return (
    <SafeAreaView>
        <View className="mt-6 mx-5">
            <View>
                <Text className="font-medium text-lg">Hi {username},</Text>
                <Text className="text-base">Track and monitor your packages</Text>
            </View>
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
                <Text className="font-bold text-lg">Latest Orders</Text>
                <Text className="text-[#00635C] font-bold text-sm">See All</Text>
            </View>
            <View>
                <List />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Dashboard
