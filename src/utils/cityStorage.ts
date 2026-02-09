import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getSavedCities(): Promise<string[]> {
  const cities = await AsyncStorage.getItem('cities');
  return cities ? JSON.parse(cities) : [];
}

export async function saveCity(city: string) {
  const cities = await getSavedCities();
  if (!cities.includes(city)) {
    cities.push(city);
    await AsyncStorage.setItem('cities', JSON.stringify(cities));
  }
}

export async function removeCity(city: string) {
  const cities = await getSavedCities();
  const newCities = cities.filter(c => c !== city);
  await AsyncStorage.setItem('cities', JSON.stringify(newCities));
}