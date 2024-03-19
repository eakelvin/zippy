import React, { useState } from 'react'
import { 
    Image, Text, TextInput, View, SafeAreaView, TouchableOpacity, Pressable, ActivityIndicator, 
} from 'react-native'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisibility] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    const handleShow = () => {
        setVisibility(!visible);
    };

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)
        try {
          const response = await axios.post('https://coding.zippy.com.gh/api/login', { email, password });
          if (response.data.responseCode === "002") {
            const accessToken = response.data.accessToken;
            // const username = response.data.data.name
            await AsyncStorage.setItem('token', accessToken)
            // await AsyncStorage.setItem('name', username)
           Toast.show({
            type:'success',
            text1: response.data.responseDesc
           })
           navigation.navigate('dashboard')
          }
        } catch (error) {
            if (error.response.data.responseCode === "003") {
                // console.warn(error.response.data.responseDesc)
                setError(error.response.data.responseDesc)
                Toast.show({
                    type:'error',
                    text1:error.response.data.responseDesc
                })
            } else {
                Toast.show({
                    type:'error',
                    text1: "Sorry! You provided incorrect login details.",
                    text2: "Please check and try again"
                })
            }   
        } finally {
            setLoading(false)
            setEmail('')
            setPassword('')
        }
    };

  return (
    <View className="flex-1">
        <SafeAreaView className="flex">
            <View className="flex-row justify-center mt-32">
                <Image source={require('../../assets/logo.png')}  />
            </View>
        </SafeAreaView>
        <View className="flex-1 px-8 pt-8">
            <View className="">
                <Text className="font-semibold text-lg text-center">Get Started Now</Text>
                <Text className="font-light mt-3 text-center">Enter your credentials to access your account</Text>
            </View>

            <View className="mt-5">
                <View className="mb-2">
                    <Text className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </Text>
                    <View className="relative w-full">
                        <TextInput
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white' 
                            required 
                            placeholder='Your email' 
                            value={email}
                            onChangeText={(text) => setEmail(text)} 
                        />
                        <TouchableOpacity className="absolute inset-y-0 right-0 p-2.5 items-center">
                            <Image source={require('../../assets/sms.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </Text>
                    <View className="relative">
                        <TextInput
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                            placeholder='Your Password' 
                            value={password}
                            onChangeText={(text) => setPassword(text)} 
                            secureTextEntry={!visible}
                        />
                        <TouchableOpacity 
                            className="absolute inset-y-0 right-0 flex-1 items-center p-2.5"
                            onPress={handleShow}
                        >
                            <Image source={require('../../assets/eye.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text className="align-baseline text-gray-400">
                        Forget Password?
                    </Text>
                </View>
                
                <View className="mt-10">
                    {/* {loading && <ActivityIndicator size={'large'} color={'blue'} />} */}
                    <Pressable 
                        onPress={handleSubmit} 
                        className="items-center justify-center focus:outline-none text-white bg-[#4CA7A8] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        {loading ? <ActivityIndicator size={'large'} color={'blue'} /> : <Text>Login</Text>}
                    </Pressable>
                    {error && <Text>{error}</Text>}
                </View>
            </View>
        </View>
    </View>
  )
}

export default Login