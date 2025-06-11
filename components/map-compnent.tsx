import Mapbox from "@rnmapbox/maps";
import React from "react";
import { StyleSheet, View } from "react-native";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiaXphYWtnb3VnaCIsImEiOiJjbWJyb3djOGkwYmNoMmtzZGJpYnhobnY0In0.0lCMO8itKmoP2E2amrDl4A"
);

const MapApp = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default MapApp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
