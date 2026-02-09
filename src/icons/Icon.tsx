import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";


// Sun Icon
export const SunIcon = () => (
  <Svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <Path d="M120 10V30M120 210V230M42.2 42.2L56.4 56.4M183.6 183.6L197.8 197.8M10 120H30M210 120H230M42.2 197.8L56.4 183.6M183.6 56.4L197.8 42.2M170 120C170 147.614 147.614 170 120 170C92.3858 170 70 147.614 70 120C70 92.3858 92.3858 70 120 70C147.614 70 170 92.3858 170 120Z" stroke="#FFA600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Cloud Icon
export const CloudIcon = () => (
  <Svg width="240" height="240" viewBox="0 0 225 164" fill="none">
    <Defs>
      <LinearGradient id="cloudGradient" x1="112.97" y1="2" x2="112.97" y2="162" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#0095FF"/>
        <Stop offset="1" stopColor="#3700FF"/>
      </LinearGradient>
    </Defs>
    <Path d="M173 62H160.4C156.659 47.51 148.928 34.3599 138.086 24.044C127.245 13.728 113.727 6.65991 99.0692 3.64276C84.4113 0.62561 69.201 1.7804 55.1665 6.97592C41.1321 12.1714 28.8364 21.1993 19.6765 33.0338C10.5166 44.8683 4.85991 59.0348 3.34908 73.9235C1.83825 88.8123 4.53391 103.826 11.1298 117.26C17.7256 130.693 27.9572 142.007 40.6618 149.916C53.3665 157.824 68.0348 162.011 83 162H173C186.261 162 198.979 156.732 208.355 147.355C217.732 137.979 223 125.261 223 112C223 98.7392 217.732 86.0215 208.355 76.6447C198.979 67.2678 186.261 62 173 62Z" stroke="url(#cloudGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Rain Icon
export const RainIcon = () => (
  <Svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <Defs>
      <LinearGradient id="rainGradient" x1="119.941" y1="10.0029" x2="119.941" y2="230" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3700FF"/>
        <Stop offset="1" stopColor="#00AEFF"/>
      </LinearGradient>
    </Defs>
    <Path d="M160 130V210M80 130V210M120 150V230M200 165.8C210.512 161.196 219.121 153.116 224.381 142.915C229.641 132.715 231.231 121.016 228.886 109.782C226.541 98.5476 220.402 88.4621 211.5 81.2184C202.599 73.9746 191.476 70.0135 180 70H167.4C164.23 57.7252 158.189 46.3795 149.773 36.898C141.358 27.4165 130.809 20.0708 118.998 15.4662C107.186 10.8617 94.449 9.13017 81.8368 10.4144C69.2245 11.6987 57.0981 15.962 46.4569 22.8528C35.8158 29.7437 26.9646 39.0648 20.633 50.048C14.3014 61.0311 10.6707 73.3617 10.0401 86.0235C9.40948 98.6853 11.7971 111.316 17.006 122.874C22.215 134.431 30.0962 144.586 40 152.5" stroke="url(#rainGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Lightning Icon
export const LightningIcon = () => (
  <Svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <Defs>
      <LinearGradient id="lightningGradient" x1="119.996" y1="10.0068" x2="119.996" y2="230" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3700FF"/>
        <Stop offset="0.407692" stopColor="#3700FF"/>
        <Stop offset="1" stopColor="#FF6600"/>
      </LinearGradient>
    </Defs>
    <Path d="M190 169C202.151 166.533 212.953 159.638 220.307 149.655C227.661 139.671 231.043 127.312 229.797 114.975C228.551 102.638 222.765 91.2047 213.563 82.8937C204.361 74.5828 192.399 69.9876 180 70H167.4C164.087 57.1732 157.64 45.3699 148.639 35.6499C139.638 25.9298 128.363 18.5973 115.828 14.3106C103.293 10.024 89.8897 8.91732 76.8213 11.0901C63.7529 13.2628 51.4287 18.647 40.955 26.7591C30.4814 34.8712 22.1862 45.4574 16.8143 57.5671C11.4424 69.6769 9.16185 82.9311 10.1775 96.1399C11.1931 109.349 15.4731 122.099 22.6332 133.245C29.7932 144.391 39.6093 153.584 51.2 160M130 110L90 170H150L110 230" stroke="url(#lightningGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Moon Icon
export const MoonIcon = () => (
  <Svg width="240" height="240" viewBox="0 0 240 240" fill="none">
    <Defs>
      <LinearGradient id="moonGradient" x1="120.191" y1="30" x2="120.191" y2="209.618" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#1B32FF"/>
        <Stop offset="1" stopColor="#D8D0F4"/>
      </LinearGradient>
    </Defs>
    <Path d="M210 127.9C208.427 144.922 202.039 161.144 191.582 174.668C181.126 188.192 167.035 198.458 150.957 204.265C134.879 210.073 117.48 211.181 100.795 207.461C84.1102 203.741 68.8299 195.345 56.7422 183.258C44.6546 171.17 36.2594 155.89 32.5391 139.205C28.8187 122.52 29.9272 105.121 35.7346 89.043C41.542 72.9651 51.8083 58.8737 65.3321 48.4175C78.8559 37.9614 95.078 31.5731 112.1 30C102.134 43.4827 97.3385 60.0945 98.5853 76.8141C99.8321 93.5338 107.039 109.251 118.894 121.106C130.749 132.961 146.466 140.168 163.186 141.415C179.906 142.662 196.517 137.866 210 127.9Z" stroke="url(#moonGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Snow Icon
export const SnowIcon = () => (
  <Svg width="240" height="240" viewBox="0 0 225 204" fill="none">
    <Defs>
      <LinearGradient id="snowGradient" x1="112.941" y1="2.00287" x2="112.941" y2="202" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3700FF"/>
        <Stop offset="0.624038" stopColor="white"/>
      </LinearGradient>
    </Defs>
    <Path d="M193 157.8C203.513 153.196 212.121 145.116 217.381 134.915C222.641 124.715 224.231 113.016 221.886 101.782C219.541 90.5476 213.402 80.4621 204.501 73.2184C195.599 65.9746 184.477 62.0135 173 62H160.4C157.23 49.7252 151.189 38.3795 142.773 28.898C134.358 19.4165 123.809 12.0708 111.998 7.46622C100.186 2.86167 87.4492 1.13017 74.8369 2.41444C62.2247 3.69871 50.0982 7.96197 39.457 14.8528C28.8159 21.7437 19.9647 31.0648 13.6331 42.048C7.30154 53.0311 3.67081 65.3617 3.0402 78.0235C2.4096 90.6853 4.79717 103.316 10.0061 114.874C15.2151 126.431 23.0963 136.586 33.0001 144.5M73.0001 142H73.1001M73.0001 182H73.1001M113 162H113.1M113 202H113.1M153 142H153.1M153 182H153.1" stroke="url(#snowGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Saved Icon
export const SavedIcon = () => (
  <Svg width="94" height="94" viewBox="0 0 76 76" fill="none">
    <Path d="M57.5833 73.25V41.9167H18.4167V73.25M18.4167 2.75V22.3333H49.75M65.4167 73.25H10.5833C8.5058 73.25 6.51336 72.4247 5.04433 70.9557C3.57529 69.4866 2.75 67.4942 2.75 65.4167V10.5833C2.75 8.5058 3.57529 6.51336 5.04433 5.04433C6.51336 3.57529 8.5058 2.75 10.5833 2.75H53.6667L73.25 22.3333V65.4167C73.25 67.4942 72.4247 69.4866 70.9557 70.9557C69.4866 72.4247 67.4942 73.25 65.4167 73.25Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// Map Icon
export const MapIcon = () => (
  <Svg width="94" height="94" viewBox="0 0 76 92" fill="none">
    <Path d="M73.25 38.1667C73.25 65.5833 38 89.0833 38 89.0833C38 89.0833 2.75 65.5833 2.75 38.1667C2.75 28.8178 6.46383 19.8518 13.0745 13.2412C19.6851 6.6305 28.6511 2.91667 38 2.91667C47.3489 2.91667 56.3149 6.6305 62.9255 13.2412C69.5362 19.8518 73.25 28.8178 73.25 38.1667Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M38 49.9167C44.4893 49.9167 49.75 44.656 49.75 38.1667C49.75 31.6773 44.4893 26.4167 38 26.4167C31.5107 26.4167 26.25 31.6773 26.25 38.1667C26.25 44.656 31.5107 49.9167 38 49.9167Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);