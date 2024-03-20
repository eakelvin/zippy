import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, FlatList, ActivityIndicator } from 'react-native'
import { allOrders } from './Request';

const List = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await allOrders();
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    const Item = ({ item }) => {
        const statusColors = {
            delivered: { textColor: "text-green-600", bgColor: "bg-green-100" },
            cancelled: { textColor: "text-red-600", bgColor: "bg-red-100" },
            "order picked up": { textColor: "text-blue-600", bgColor: "bg-indigo-100" },
            "in transit": { textColor: "text-yellow-600", bgColor: "bg-yellow-100" },
            "in progress": { textColor: "text-yellow-600", bgColor: "bg-yellow-100" },
            "order received": { textColor: "text-blue-600", bgColor: "bg-blue-100" },
        };

        const colors = statusColors[item.status.toLowerCase()]
        const bgColor = colors.bgColor
        const textColor = colors.textColor

        return (
            <View className="p-4 my-1 flex-row justify-between items-center shadow-md rounded-xl bg-gray-100 border border-gray-200">
                <View className="flex-row">
                    <Image source={require('../../assets/delivery.png')} />
                    <View className="ml-3">
                        <Text className="font-bold text-base">To: {item.receiverName}</Text>
                        <Text className="text-gray-400">{item.senderZoneName} - {item.receiverzoneName}</Text>
                        <Text className="text-[#1680E4]">{item.pickupTime} - {item.deliveryTime}</Text>
                    </View>
                </View>
                <View className={`rounded-md px-[6px] py-[10px] ${bgColor}`}>
                    <Text className={`font-bold ${textColor}`}>
                        {item.status}
                    </Text>
                </View>
            </View>
        )
    }
    
  return (
    <View>
        <View className="flex-row justify-between items-center mt-6">
                <Text className="font-bold text-lg">Latest Orders</Text>
                <Text className="text-[#00635C] font-bold text-sm">See All</Text>
        </View>
        {loading ? 
            (<ActivityIndicator size={'large'} color={'blue'} /> )
        :  
            (<FlatList
                data={orders}
                renderItem={Item}
                keyExtractor={item => item.orderId}
                showsVerticalScrollIndicator={true}
            />)
        }
    </View>
  )
}

export default List