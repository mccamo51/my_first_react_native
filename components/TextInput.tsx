import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
interface CustomTextInputProps {
    onChange: (num: string) => void; // Define prop type
    value: any;
    onAdd: ()=> void;
}


const CustomTextInput: React.FC<CustomTextInputProps> = ({onChange, value, onAdd}) =>{
    return <KeyboardAvoidingView className="flex-row items-center justify-between absolute bottom-[60px] px-[20px]  w-[100%]" behavior={Platform.OS === "ios" ? "padding":"height"}>

        <TextInput value={value} onChangeText={(text)=>onChange(text)} className="py-[15px] px-[15px] rounded-full w-3/4 shadow-md bg-white border border-[#C0C0C0]" placeholder="Type your task here" />
        <TouchableOpacity onPress={onAdd}>
            <View className="h-[50px] shadow-md w-[50px] justify-center items-center  rounded-full bg-white">
                <Text className="text-2xl">+</Text>
            </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
}


export default CustomTextInput;