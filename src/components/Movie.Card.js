import React from "react";
import { Image } from "react-native";
import { image500 } from "../api";
import { Dimensions, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const MovieCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Movie", item.id)}
    >
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{ width: width * 0.7, height: height * 0.5 }}
        className={"rounded-3xl"}
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
