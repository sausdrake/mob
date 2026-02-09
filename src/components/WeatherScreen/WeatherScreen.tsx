// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { styles } from "./WeatherScreen.styles";
// import { SunIcon, CloudIcon, RainIcon, LightningIcon, MoonIcon, SnowIcon, SavedIcon, MapIcon } from "../../icons/Icon";
// import { JSX } from "react/jsx-dev-runtime";


// type WeatherType = "sun" | "cloud" | "rain" | "lightning" | "moon" | "snow";

// const weatherColors: Record<WeatherType, string> = {
//   sun: "#FFA600",
//   cloud: "#3700FF",
//   rain: "#00AEFF",
//   lightning: "#FF6600",
//   moon: "#1B32FF",
//   snow: "#B0B0B0"
// };

// const weatherIcons: Record<WeatherType, JSX.Element> = {
//   sun: <SunIcon />,
//   cloud: <CloudIcon />,
//   rain: <RainIcon />,
//   lightning: <LightningIcon />,
//   moon: <MoonIcon />,
//   snow: <SnowIcon />
// };

// interface WeatherScreenProps {
//   goToSaved: () => void;
//   goToMap: () => void;
//   weather: {
//     city: string;
//     date: string;
//     temp: string;
//     wind: string;
//     type: WeatherType;
//   }
// }

// const WeatherScreen: React.FC<WeatherScreenProps> = ({ goToSaved, goToMap, weather }) => {
//   const color = weatherColors[weather.type];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.date}>{weather.date}</Text>
//       <View style={styles.iconWeather}>
//         {weatherIcons[weather.type]}
//       </View>
//       <TouchableOpacity onPress={goToSaved}>
//           <View style={styles.cityRow}>
//             <Text style={styles.city}>{weather.city}</Text>
//             <Text style={styles.searchIcon}>🔍</Text>
//           </View>
//       </TouchableOpacity>
//       <View style={styles.tempWindRow}>
//         <Text style={[styles.temp, { color }]}>{weather.temp}</Text>
//         <Text style={[styles.wind, { color }]}>{weather.wind}</Text>
//       </View>
//       <View style={styles.bottomRow}>
//         <TouchableOpacity onPress={goToSaved}>
//           <SavedIcon />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={goToMap}>
//           <MapIcon />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default WeatherScreen;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./WeatherScreen.styles";
import { SunIcon, CloudIcon, RainIcon, LightningIcon, MoonIcon, SnowIcon, SavedIcon, MapIcon } from "../../icons/Icon";

type WeatherType = "sun" | "cloud" | "rain" | "lightning" | "moon" | "snow";

const weatherColors: Record<WeatherType, string> = {
  sun: "#FFA600",
  cloud: "#3700FF",
  rain: "#00AEFF",
  lightning: "#FF6600",
  moon: "#1B32FF",
  snow: "#B0B0B0"
};

const weatherIcons: Record<WeatherType, JSX.Element> = {
  sun: <SunIcon />,
  cloud: <CloudIcon />,
  rain: <RainIcon />,
  lightning: <LightningIcon />,
  moon: <MoonIcon />,
  snow: <SnowIcon />
};

interface WeatherScreenProps {
  goToSaved: () => void;
  goToMap: () => void;
  weather: {
    city: string;
    date: string;
    temp: string;    // "22°C" или "71°F"
    wind: string;    // "5 м/с" или "11 mph"
    type: WeatherType;
  }
}

const WeatherScreen: React.FC<WeatherScreenProps> = ({ goToSaved, goToMap, weather }) => {
  const color = weatherColors[weather.type];
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{weather.date}</Text>
      <View style={styles.iconWeather}>
        {weatherIcons[weather.type]}
      </View>
      <TouchableOpacity onPress={goToSaved}>
        <View style={styles.cityRow}>
          <Text style={styles.city}>{weather.city}</Text>
          <Text style={styles.searchIcon}>🔍</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.tempWindRow}>
        <Text style={[styles.temp, { color }]}>{weather.temp}</Text>
        <Text style={[styles.wind, { color }]}>{weather.wind}</Text>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={goToSaved}>
          <SavedIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMap}>
          <MapIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WeatherScreen;