import React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowLeftIcon: React.FC<{ size?: number; color?: string }> = ({ size = 28, color = "#222" }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path d="M19 24L9 14L19 4" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);