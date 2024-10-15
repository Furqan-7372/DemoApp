import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import MealDetails from '../MealDetails';
import { useNavigation } from '@react-navigation/native';
function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation()


  return (
    <View style={styles.mealItem}>
      <Pressable
      onPress={() => {
        navigation.navigate('Meal Detail Screen', {
          mealId: id
        })
      }}
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
