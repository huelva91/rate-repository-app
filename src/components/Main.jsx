import react from "react";
import Constans from "expo-constants";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <View style={{marginTop:Constans.statusBarHeight , flexGrow:1}}>
      <RepositoryList />

    </View>
  );
}
export default Main;