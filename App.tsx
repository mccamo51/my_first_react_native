import { StatusBar } from 'expo-status-bar';
import './global.css';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Task from 'components/Task';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E8EAED' }}>
    <View className='px-[20px] pt-[80px]'>
      <View>
      <Text className='text-[24px] pb-2 font-bold '>Today's task</Text>
      </View>

      <View>
        <Task taskName='Hellooodddd' />
      </View>
     
    </View>
  </SafeAreaView>

  );
}
