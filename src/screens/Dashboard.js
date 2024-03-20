import React, { useEffect, useState } from 'react'
import { 
    View, Text, SafeAreaView, TextInput, Pressable, Image, ScrollView, 
} from 'react-native'
import List from '../components/List'
import { userDetails } from '../components/Request'
import SearchOrder from '../components/SearchOrder'

const Dashboard = () => {
    const [username, setUsername] = useState(null)
    const [searchResults, setSearchResults] = useState(null)

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
            <SearchOrder searchResults={searchResults} setSearchResults={setSearchResults} />
            {searchResults ? (
                <View className="p-4 my-1 flex-row justify-between items-center shadow-md rounded-xl bg-gray-100 border border-gray-200">
                <View className="flex-row">
                    <Image source={require('../../assets/delivery.png')} />
                    <View className="ml-3">
                        <Text className="font-bold text-base">To: {searchResults.receiverName}</Text>
                        <Text className="text-gray-400">{searchResults.senderZoneName} - {searchResults.receiverzoneName}</Text>
                        <Text className="text-[#1680E4]">{searchResults.pickupTime} - {searchResults.deliveryTime}</Text>
                    </View>
                </View>
                <View className={`rounded-md px-[6px] py-[10px]`}>
                    <Text className={`font-bold`}>
                        {searchResults.status}
                    </Text>
                </View>
                </View>
            ) : (
                <List />
            )}
        </View>
    </SafeAreaView>
  )
}

export default Dashboard
