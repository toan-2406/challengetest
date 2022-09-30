import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#121418",
  secondary: "#ff9800",
  disabled:'#808089',
  invert:'#212529',
  subinvert:'#383A4B',
  note:'#215DEC',
  hyperlink:'#556AEB',
  hyperhover:'#8394FF',
  hyperpressed:'#556AEB',
  success: "#00A40F",
  error: "#D0004B",
  warning: "#FF8C0B",
  info: "#2196f3",
  text: "#212121",
  textWhite: "#828486",
  textSecondary: "#757575",
  textRed: "#FF2B38",
  textGreen: "#00A40F",
  textBlue: "#0085FF",
  //Border
  border: "#951188",
  borderDark: "#bdbdbd",
  //Background
  background: "#1b1f24",
  backgroundDark: "#212121",
  backgroundInput:'rgba(76, 33, 83, 0.25)',
  backgroundCard:'rgba(179, 85, 194, 0.25)',
  backgroundSecondary:'#471E46',
  //Shadow 
  shadow: "rgba(0, 0, 0, 0.2)",
  shadowDark: "rgba(0, 0, 0, 0.4)",
  //Gradient
  gradientColor: "linear-gradient(90deg, #a9bcfd 0.01%, #c7ddec 97.2%)",
  
  //white
  white: "#d4d6da",
  body: "#B6BDCB",
  //black
  black: "#000000",
  blackDark1: "#808089",
  blackDark: "#141414",
  blackCard: "#292b30",
};
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  status: {
    danger: Colors.background,
  },
  typography:{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
  },
  palette: {
    background:{
      default: Colors.background,
      paper: Colors.white,
    },
    primary:{
      main: Colors.primary,
      light: Colors.white,
    },
    secondary:{
      main: Colors.textWhite
    },
    error:{
      main: Colors.error
    },
    success:{
      main: Colors.success
    }
  }
});

export default theme;
