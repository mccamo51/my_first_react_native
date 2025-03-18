import { View, Text, TouchableOpacity } from "react-native"



interface TaskProps {
    taskName: string;
    isComplete?: boolean;
}


const Task: React.FC<TaskProps> = ({ taskName }) => {
    return <View className="bg-white rounded-[10px] p-[15px] items-center justify-between flex-row">
        <View className='flex flex-row items-center'>
            <TouchableOpacity className="h-[25px] w-[25px] bg-[#55BCF666] opacity-40 mr-4 rounded-md"></TouchableOpacity>
            <Text className="text-black text-[14px]">{taskName}</Text>
        </View>
        <View className="w-[12px] h-[12px] border-2 border-[#55BCF6] bg-white rounded-md"></View>

    </View>
}

export default Task;