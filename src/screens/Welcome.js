import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, View, SafeAreaView, Image, TouchableOpacity,
} from 'react-native';

const Welcome = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('login')
    }, 2000)
    return () => clearTimeout(timeout)

  }, [navigation.navigate])

  return (
    <SafeAreaView>
      <View className="relative">
        <Image className="" source={require('../../assets/lbur5.png')} />
        <View className="absolute top-24">
          <Image className="" source={require('../../assets/lbur4.png')} />
        </View>
        <View className="absolute top-44">
          <Image source={require('../../assets/lbur3.png')} />
        </View>
        <View className="absolute top-60 left-10">
          <Image source={require('../../assets/lbur2.png')} />
        </View>
        <View className="absolute top-72 left-24">
          <Image source={require('../../assets/lbur.png')} />
        </View>
        <View className="absolute top-96 left-36">
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Image source={require('../../assets/logo.png')}  />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
});

export default Welcome