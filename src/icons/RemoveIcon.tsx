import React from "react";
import { Svg, Line } from "react-native-svg";

export const RemoveIcon = ({ size = 22, color = "#e74c3c" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Line x1="5" y1="5" x2="19" y2="19" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
    <Line x1="19" y1="5" x2="5" y2="19" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
  </Svg>
);