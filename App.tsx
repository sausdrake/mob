// import React, { useState } from "react";
// import WeatherScreen from "./src/components/WeatherScreen/WeatherScreen";
// import SavedCitiesScreen from "./src/components/SavedCitiesScreen/SavedCitiesScreen";
// import MapScreen from "./src/components/MapScreen/MapScreen";

// const initialCities = [
//   { name: "Красноярск", type: "sun" },
//   { name: "Зеленогорск", type: "cloud" },
//   { name: "Саяногорск", type: "moon" },
//   { name: "Питер", type: "rain" },
//   { name: "Новосибирск", type: "lightning" },
//   { name: "Москва", type: "snow" }
// ];

// export type WeatherType = "sun" | "cloud" | "rain" | "lightning" | "moon" | "snow";

// export default function App() {
//   const [screen, setScreen] = useState<"weather" | "saved" | "map">("weather");
//   const [cities, setCities] = useState(initialCities);
//   const [selectedCity, setSelectedCity] = useState(initialCities[0]);

//   const handleSelectCity = (cityName: string) => {
//     const city = cities.find(c => c.name === cityName);
//     if (city) {
//       // Перемещаем выбранный город на самый верх
//       const newCities = [city, ...cities.filter(c => c.name !== cityName)];
//       setCities(newCities);
//       setSelectedCity(city);
//     }
//     setScreen("weather");
//   };

//   return (
//     <>
//       {screen === "weather" && (
//         <WeatherScreen
//           goToSaved={() => setScreen("saved")}
//           goToMap={() => setScreen("map")}
//           weather={{
//             city: selectedCity.name,
//             date: "24 Апрель 2025",
//             temp: "+19",
//             wind: "4 м/с",
//             type: selectedCity.type as WeatherType
//           }}
//         />
//       )}
//       {screen === "saved" && (
//         <SavedCitiesScreen
//           goToWeather={() => setScreen("weather")}
//           selectedCity={selectedCity.name}
//           onSelectCity={handleSelectCity}
//           cities={cities.map(c => c.name)}
//         />
//       )}
//       {screen === "map" && <MapScreen goToWeather={() => setScreen("weather")} />}
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import WeatherScreen from "./src/components/WeatherScreen/WeatherScreen";
import SavedCitiesScreen from "./src/components/SavedCitiesScreen/SavedCitiesScreen";
import MapScreen from "./src/components/MapScreen/MapScreen";
import { getWeatherByCity, getWeatherType } from "./src/utils/weatherApi"; // смотри ниже

type ScreenType = "weather" | "saved" | "map";
type WeatherType = "sun" | "cloud" | "rain" | "lightning" | "moon" | "snow";

const DEFAULT_CITY = "Краснодар";
const DEFAULT_UNITS: "metric" | "imperial" = "metric"; // или "imperial" для F

export default function App() {
  const [screen, setScreen] = useState<ScreenType>("weather");
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);
  const [units, setUnits] = useState<"metric" | "imperial">(DEFAULT_UNITS);
  const [weather, setWeather] = useState<{
    city: string;
    date: string;
    temp: string;
    wind: string;
    type: WeatherType;
  } | null>(null);

  // Делаем запрос к погоде при изменении города или единиц
  useEffect(() => {
    getWeatherByCity(selectedCity, units).then((data) => {
      if (!data) {
        setWeather(null);
        return;
      }
      // date можно сделать как "Сегодня, 28 мая"
      const dateObj = new Date();
      const monthNames = [
        "января", "февраля", "марта", "апреля",
        "мая", "июня", "июля", "августа",
        "сентября", "октября", "ноября", "декабря"
      ];
      const dateStr = `Сегодня, ${dateObj.getDate()} ${monthNames[dateObj.getMonth()]}`;
      setWeather({
        city: data.city,
        date: dateStr,
        temp: `${data.temp}°${data.units}`,
        wind: `${data.wind} ${data.units === "C" ? "м/с" : "mph"}`,
        type: getWeatherType(data.weatherId, data.isNight) // см. ниже
      });
    });
  }, [selectedCity, units]);

  if (screen === "saved") {
    return (
      <SavedCitiesScreen
        goToWeather={() => setScreen("weather")}
        selectedCity={selectedCity}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setScreen("weather");
        }}
      />
    );
  }

  if (screen === "map") {
    return (
      <MapScreen
        goToWeather={() => setScreen("weather")}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setScreen("weather");
        }}
      />
    );
  }

  return (
    <WeatherScreen
      goToSaved={() => setScreen("saved")}
      goToMap={() => setScreen("map")}
      weather={weather || {
        city: selectedCity,
        date: "",
        temp: "--",
        wind: "--",
        type: "sun"
      }}
    />
  );
}