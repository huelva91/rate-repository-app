import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Text style={styles.strong}>ID: {props.id}</Text>
    <Text>FullName: {props.fullName}</Text>
    <Text>Description: {props.description}</Text>
    <Text>Language: {props.language}</Text>
    <Text>Stars: {props.stargazersCount}</Text>
    <Text>Forks: {props.forksCount}</Text>
    <Text>Review: {props.reviewCount}</Text>
    <Text>Rating: {props.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
