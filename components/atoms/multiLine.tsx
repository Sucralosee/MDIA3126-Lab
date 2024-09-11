import { Text, View } from "react-native";

export default function MultiLine( {multiLineText}) { 
    return(
        <View>
            <Text
                style={{
                    color:"green"
                    
                }}
            >
                {multiLineText}    
            </Text>
        </View>
    ) 
}