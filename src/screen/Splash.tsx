import { Animated, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import { useEffect, useRef } from "react";

export default function Splashsceen() {

    const fadeIn = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();
    }, [fadeIn]);

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <StatusBar hidden={true} />

            <CircleShape
                width={200}
                height={200}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-30}
                leftValue={-30} />

            <CircleShape
                width={135}
                height={135}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-25}
                leftValue={80} />

            <Animated.View style={{ opacity: fadeIn }}>
                <Image source={require("../../assets/logo.png")} style={{ height: 180, width: 220 }} />
            </Animated.View>

            <View className=" absolute bottom-0 mb-10 flex-1 flex-col justify-center items-center" >
                <Text className=" text-xs font-bold text-gray-500" >POWERED By: {process.env.EXPO_PUBLIC_APP_OWNER}</Text>
                <Text className=" text-xs font-bold text-gray-500" >VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}</Text>

            </View>
        </SafeAreaView>
    );
}