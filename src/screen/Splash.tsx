import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"

export default function Splashsceen() {
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <StatusBar hidden={true} />
            <Image source={require("../../assets/logo.png")}
                style={{ height: 180, width: 220 }} />

            <View style={styles.bottomContainer} >
                <Text style={styles.companyName} >POWERED By: {process.env.EXPO_PUBLIC_APP_OWNER}</Text>
                <Text style={styles.appVersion} >VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    companyName: {
        color: '#475569',
        fontWeight: "bold",
        fontSize: 12
    },
    appVersion: {
        color: '#475569',
        fontWeight: "bold",
        fontSize: 10
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})