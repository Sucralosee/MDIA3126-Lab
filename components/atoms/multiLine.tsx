import { Text, View } from "react-native";

export default function MultiLine( {multiLineText}) { 
    return(
        <View>
            <Text
                style={{
                    color:"#132B1D",
                    paddingTop: 16,
                }}
            >
                {multiLineText}    
            </Text>
        </View>
    ) 
}