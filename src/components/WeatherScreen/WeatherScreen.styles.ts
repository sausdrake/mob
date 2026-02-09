import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181A",
    paddingTop: 60,
    paddingHorizontal: 0,
    justifyContent: "flex-start",
  },
  date: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 16,
    opacity: 0.9,
  },
  iconWeather: {
    alignSelf: "center",
    marginBottom: 22,
  },
  cityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    gap: 10,
  },
  city: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "400",
    marginRight: 8,
  },
  searchIconContainer: {
    marginLeft: 2,
    padding: 4,
  },
  searchIcon: {
    color: "#fff",
    fontSize: 22,
  },
  tempWindRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  temp: {
    color: "#FFA600",
    fontSize: 64,
    fontWeight: "bold",
    marginRight: 16,
  },
  wind: {
    color: "#FFA600",
    fontSize: 64,
    fontWeight: "bold",
  },
  bottomRow: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});