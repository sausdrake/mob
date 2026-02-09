import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { geocodeCity } from "../../utils/geocodeCity";
import { saveCity } from "../../utils/cityStorage"; // Добавь этот импорт!

interface MapScreenProps {
  goToWeather: () => void;
}

const defaultCity = "Москва";

const MapScreen: React.FC<MapScreenProps> = ({ goToWeather }) => {
  const [city, setCity] = useState(defaultCity);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleFindCity = async () => {
    setLoading(true);
    setError(null);
    setIsSaved(false);
    const result = await geocodeCity(city);
    setLoading(false);
    if (result) {
      setCoords(result);
    } else {
      setError("Город не найден");
      setCoords(null);
    }
  };

  const handleSaveCity = async () => {
    await saveCity(city);
    setIsSaved(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={
          coords
            ? {
                latitude: coords.lat,
                longitude: coords.lon,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }
            : {
                latitude: 55.751244,
                longitude: 37.618423,
                latitudeDelta: 10,
                longitudeDelta: 10,
              }
        }
      >
        {coords && (
          <Marker coordinate={{ latitude: coords.lat, longitude: coords.lon }} title={city} />
        )}
      </MapView>
      <View style={styles.overlay}>
        <View style={styles.inputRow}>
          <TouchableOpacity style={styles.backButton} onPress={goToWeather}>
            <Text style={styles.backButtonText}>{"←"}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            placeholder="Введите город"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.findButton} onPress={handleFindCity} disabled={loading}>
            <Text style={styles.findButtonText}>Найти</Text>
          </TouchableOpacity>
          {coords && (
            <TouchableOpacity
              style={[styles.saveButton, isSaved && styles.savedButton]}
              onPress={handleSaveCity}
              disabled={isSaved}
            >
              <Text style={styles.saveButtonText}>
                {isSaved ? "Сохранено" : "☆ Сохранить"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {loading && <ActivityIndicator color="#fff" />}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(30,30,30,0.7)",
    borderRadius: 10,
    padding: 6,
    alignSelf: "center",
  },
  backButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    color: "#fff",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "#fff",
    minWidth: 100,
    fontSize: 16,
    marginRight: 8,
    paddingHorizontal: 4,
    paddingVertical: 4,
    flex: 1,
  },
  findButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  findButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#27ae60",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  savedButton: {
    backgroundColor: "#aaa",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 15,
  },
  error: {
    color: "#ff5b5b",
    marginTop: 6,
    marginBottom: 2,
    fontSize: 16,
  }
});

export default MapScreen;