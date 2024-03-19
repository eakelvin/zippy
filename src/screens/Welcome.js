import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Image source={require('../../assets/logo.png')}  />
        </TouchableOpacity>
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
    },
});

export default Welcome