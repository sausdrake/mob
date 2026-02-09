import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./SavedCitiesScreen.styles";
import { StarIcon } from "../../icons/StarIcon";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { RemoveIcon } from "../../icons/RemoveIcon";
import { getSavedCities, removeCity } from "../../utils/cityStorage"; // Импортируй методы работы с базой

interface SavedCitiesScreenProps {
  goToWeather: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

const SavedCitiesScreen: React.FC<SavedCitiesScreenProps> = ({
  goToWeather,
  selectedCity,
  onSelectCity,
}) => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  // Загрузка городов из AsyncStorage при открытии и после удаления
  const loadCities = async () => {
    const saved = await getSavedCities();
    setCities(saved);
  };

  useEffect(() => {
    loadCities();
  }, []);

  const handleRemoveCity = async (city: string) => {
    await removeCity(city);
    await loadCities();
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBlock}>
        <TouchableOpacity onPress={goToWeather} style={styles.arrowBack}>
          <ArrowLeftIcon size={24} color="#222" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="поиск"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>
      <FlatList
        data={filteredCities}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.cityButton,
                item === selectedCity && styles.cityButtonActive,
              ]}
              onPress={() => onSelectCity(item)}
            >
              <StarIcon filled={item === selectedCity} size={26} />
              <Text
                style={[
                  styles.cityText,
                  item === selectedCity && styles.cityTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 6, padding: 6 }}
              onPress={() => handleRemoveCity(item)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <RemoveIcon size={22} color="#e74c3c" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.cityList}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

export default SavedCitiesScreen;