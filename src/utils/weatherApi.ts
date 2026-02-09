// const API_KEY = "61b914f94feac9e507e4ba6f548ca5b3"; // Вставь свой ключ OpenWeatherMap

const API_KEY = "61b914f94feac9e507e4ba6f548ca5b3";

export type WeatherUnits = "metric" | "imperial";
export type WeatherUnitsDisplay = "C" | "F";

export async function getWeatherByCity(
  city: string,
  units: WeatherUnits = "metric"
): Promise<{
  city: string;
  temp: number;
  wind: number;
  weatherId: number;
  isNight: boolean;
  units: WeatherUnitsDisplay;
} | null> {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=${units}&lang=ru`
    );
    const data = await res.json();
    if (data && data.main && data.wind && data.weather && data.weather[0]) {
      // Определяем ночь/день
      const now = Math.floor(Date.now() / 1000);
      const isNight = now < data.sys.sunrise || now > data.sys.sunset;
      return {
        city: data.name || city,
        temp: Math.round(data.main.temp),
        wind: Math.round(data.wind.speed),
        weatherId: data.weather[0].id,
        isNight,
        units: units === "metric" ? "C" : "F"
      };
    }
    return null;
  } catch {
    return null;
  }
}

// Маппинг weatherId и ночи/дня на твои типы иконок
export function getWeatherType(weatherId: number, isNight: boolean): "sun" | "cloud" | "rain" | "lightning" | "moon" | "snow" {
  if (weatherId >= 200 && weatherId < 300) return "lightning";
  if (weatherId >= 300 && weatherId < 600) return "rain";
  if (weatherId >= 600 && weatherId < 700) return "snow";
  if (weatherId >= 700 && weatherId < 800) return "cloud";
  if (weatherId === 800) return isNight ? "moon" : "sun";
  if (weatherId > 800 && weatherId < 900) return "cloud";
  return "sun";
}