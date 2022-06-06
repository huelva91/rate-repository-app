import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositotyStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeaders = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10}}>
    <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
      
    </View>

    <View style={{ flex: 1}}>
      <StyledText fontWeight="bold" fontSize="subheading">
        {fullName}
      </StyledText>
      <StyledText>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);
const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeaders {...props} />
    <RepositotyStats {...props} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
export default RepositoryItem;
