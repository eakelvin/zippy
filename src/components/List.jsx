import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import { allOrders } from './Request';

const List = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await allOrders();
                console.warn("All Orders:", response.data)
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const Item = ({ item }) => {
        return (
            <View className="p-4 my-1 flex-row justify-between items-center rounded-lg border border-gray-200">
            <View className="flex-row">
                <Image source={require('../../assets/delivery.png')} />
                <View className="ml-3">
                    <Text className="font-bold text-base">To: {item.receiverName}</Text>
                    <Text className="text-gray-400">{item.senderZoneName} - {item.receiverzoneName}</Text>
                    <Text className="text-[#1680E4]">{item.pickupTime} - {item.deliveryTime}</Text>
                </View>
            </View>
            <Text>{item.status}</Text>
            </View>
        )
    }
    
  return (
    <SafeAreaView>
        <FlatList
            data={orders}
            renderItem={Item}
            keyExtractor={item => item.orderId}
        />
    </SafeAreaView>
  )
}

export default List