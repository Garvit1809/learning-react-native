import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { Text } from "react-native";

const Categories = ({ navigation }) => {
  function renderCategoryItem({ item }) {

    function onPressHandler() {
      navigation.navigate('MealOverview', {
        categoryId: item.id
      })
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default Categories;
