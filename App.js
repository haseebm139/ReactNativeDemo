/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView, 
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(){
  const isDarkMode = useColorScheme() === 'dark';  
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return (
    <SafeAreaView className={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="mb-3 bg-white dark:bg-black">
          <Text className="bg-slate-600 rounded-full  text-center p-5">
            Hello{' '}
          </Text>
        </View>

        <View className="mb-3 bg-white dark:bg-black">
          <Text className="bg-slate-600 rounded-full  text-center p-5">
            Hello{' '}
          </Text>
        </View>
        <View className="mb-3 bg-white dark:bg-black">
          <Text className="bg-slate-600 rounded-full  text-center p-5">
            Hello{' '}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
