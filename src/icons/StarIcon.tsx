import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface StarIconProps {
  filled?: boolean;
  size?: number;
}

export const StarIcon: React.FC<StarIconProps> = ({ filled = false, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    {filled ? (
      <>
        <Circle cx="14" cy="14" r="13" fill="#FFC700" />
        <Path d="M14 7.8l1.7 3.5 3.8.5-2.8 2.8.7 3.8L14 15.6l-3.4 1.8.7-3.8-2.8-2.8 3.8-.5L14 7.8z" fill="#fff"/>
      </>
    ) : (
      <>
        <Circle cx="14" cy="14" r="13" stroke="#B0B0B0" strokeWidth="2"/>
        <Path d="M14 7.8l1.7 3.5 3.8.5-2.8 2.8.7 3.8L14 15.6l-3.4 1.8.7-3.8-2.8-2.8 3.8-.5L14 7.8z" stroke="#B0B0B0" strokeWidth="1.2" fill="none"/>
      </>
    )}
  </Svg>
);