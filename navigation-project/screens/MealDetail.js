import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/favourites";

const MealDetail = ({ route, navigation }) => {

  const mealId = route.params.mealId;

  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)
  const mealIsFavourite = favouriteMealIds.includes(mealId);
  const dispatch = useDispatch();


  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavouriteMealHandler() {
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }))
    } else {
      dispatch(addFavourite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
          icon={mealIsFavourite ? 'star' : 'star-outline'}
          // icon='star-outline'
          color="white"
          onPress={changeFavouriteMealHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteMealHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
