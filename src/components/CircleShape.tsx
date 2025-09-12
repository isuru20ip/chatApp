import { View, StyleSheet } from "react-native";

interface CircleProps {
    // required
    width: number;
    height: number;
    fillColor: string;
    borderRadius: number;

    // optional
    topValue?: number;
    bottomValue?: number;
    leftValue?: number;
    rightValue?: number;
}

export default function CircleShape({
    width,
    height,
    fillColor,
    borderRadius,
    topValue,
    bottomValue,
    leftValue,
    rightValue,
}: CircleProps) {
    return (
        <View
            style={{
                width: width,
                height: height,
                backgroundColor: fillColor,
                borderRadius: borderRadius,
                position: "absolute",
                ...(topValue !== undefined && { top: topValue }),
                ...(bottomValue !== undefined && { bottom: bottomValue }),
                ...(leftValue !== undefined && { left: leftValue }),
                ...(rightValue !== undefined && { right: rightValue }),
            }}
        />
    );
}
