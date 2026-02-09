import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181A",
    alignItems: "center",
    justifyContent: "center"
  },
  searchBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 400,
  },
  arrowBack: {
    marginRight: 8,
    padding: 4,
  },
  searchInput: {
    backgroundColor: "#232329",
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    fontSize: 17,
    flex: 1,
    marginRight: 8,
  },
  searchIcon: {
    color: "#aaa",
    fontSize: 20,
    marginLeft: 2,
  },
  cityList: {
    paddingBottom: 60,
    minWidth: 260,
    width: "100%",
    maxWidth: 400,
  },
  cityRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  cityButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#232329",
  },
  cityButtonActive: {
    backgroundColor: "#3498db33",
  },
  cityText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 12,
  },
  cityTextActive: {
    color: "#4dd0e1",
    fontWeight: "bold",
  },
  removeButton: {
    marginLeft: 8,
    padding: 6,
    borderRadius: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});