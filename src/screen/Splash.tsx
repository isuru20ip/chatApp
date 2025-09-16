import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import { use, useEffect, useRef } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Splashsceen() {

    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 5000 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return { opacity: opacity.value }
    });

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <StatusBar hidden={true} />

            <CircleShape
                width={200}
                height={200}
                borderRadius={999}
                className="bg-slate-700"
                topValue={-40}
                leftValue={-50}
            />

            <CircleShape
                width={135}
                height={135}
                borderRadius={999}
                className="bg-slate-400"
                topValue={-40}
                rightValue={-20}
            />

            <Animated.View style={animatedStyle}>
                <Image source={require("../../assets/logo.png")} style={{ height: 180, width: 220 }} />
            </Animated.View>

            <Animated.View className=" absolute bottom-0 mb-10 flex-1 flex-col justify-center items-center" style={animatedStyle}>
                <Text className=" text-xs font-bold text-gray-500" >POWERED By: {process.env.EXPO_PUBLIC_APP_OWNER}</Text>
                <Text className=" text-xs font-bold text-gray-500" >VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
            </Animated.View>
        </SafeAreaView>
    );
}