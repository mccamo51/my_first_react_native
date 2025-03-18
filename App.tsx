import { StatusBar } from 'expo-status-bar';
import './global.css';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Task from 'components/Task';
import CustomTextInput from 'components/TextInput';
import { useState } from 'react';


interface Task{
  text:string
}

export default function App() {

  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState<Task[]>([])


  const addTask = (tasks:string) =>{
    setTask(tasks)
  }

  const onSaveTask = () =>{
    const newTask: Task = {text:task}
    setTaskList([...taskList, newTask])
    setTask("")
  }

  const completeTask = (index: number) =>{
    const copyTask = [...taskList]
    copyTask.splice(index, 1)
    setTaskList(copyTask)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E8EAED' }}>
    <View className='px-[20px] pt-[80px]'>
      <View>
      <Text  className='text-[24px] pb-2 font-bold '>Today's task</Text>
      </View>

      <View className=''>
        
       {taskList?.map((task, index)=>{
        return (<TouchableOpacity key={index} onPress={()=>completeTask(index)}>
          <Task  taskName={task.text} />
           </TouchableOpacity>)
       })}
      </View>
     
    </View>
     <CustomTextInput onChange={addTask} value={task}  onAdd={()=>onSaveTask()}/>
  </SafeAreaView>

  );
}
