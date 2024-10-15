import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => [
                    styles.buttonStyle,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
                >
                <View style={styles.innerContainer}>
                    <Text style={styles.titleStyle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,

    },

})