import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const userDetails = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        const {data} = await axios.get(
            "https://coding.zippy.com.gh/api/get_user_details", 
            { headers: { Authorization: `Bearer ${token}` }}
        )
        // console.warn(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const allOrders = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        const {data} = await axios.get("https://coding.zippy.com.gh/api/get_orders", 
            { headers: {Authorization: `Bearer ${token}`}}
        )
        // console.warn(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const orderDetails = async (orderId) => {
    try {
        const token = await AsyncStorage.getItem('token')
        const {data} = await axios.get(
            `https://coding.zippy.com.gh/api/get_order_details?orderId=${orderId}`,
            { headers: {Authorization: `Bearer ${token}`}} 
        )
        return data
    } catch (error) {
        console.error(error)
    }
}

export const orderStatuses = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        const {data} = await axios.get("https://coding.zippy.com.gh/api/get_order_statuses", 
            { headers: {Authorization: `Bearer ${token}`}}
        )
        return data
    } catch (error) {
        console.error(error)
    }
}