import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpcamingMovie,
} from "../api";
import TrendingMovie from "../components/Trending.Movie";
import TopRatedMovie from "../components/Top.Rated.Movie";
import UpcomingMovie from "../components/Upcoming.Movie";
import Loader from "../components/Loader";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovie();
    getUpcomingMovie();
    getTopRatedMovie();
    getPopularMovie();
  }, []);
  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    setTrending(data.results || []);
    setIsLoading(false);
  };
  const getUpcomingMovie = async () => {
    const data = await fetchUpcamingMovie();
    setUpcoming(data.results || []);
  };
  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    setTopRated(data.results || []);
  };
  const getPopularMovie = async () => {
    const data = await fetchPopularMovie();
    setPopular(data.results || []);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SafeAreaView className="mt-4">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 border-b-4 ">
          <Image source={require("../../assets/logo.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <ScrollView
          className="mt-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {trending.length > 0 && <TrendingMovie trending={trending} />}
          {upcoming.length > 0 && (
            <UpcomingMovie upcoming={upcoming} title={"Upcoming Movie"} />
          )}
          {upcoming.length > 0 && (
            <UpcomingMovie
              upcoming={trending.reverse()}
              title={"Trending Movie"}
            />
          )}
          {popular.length > 0 && (
            <UpcomingMovie upcoming={popular} title={"Popular Movie"} />
          )}
          {topRated.length > 0 && <TrendingMovie trending={topRated} />}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
