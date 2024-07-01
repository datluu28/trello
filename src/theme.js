import { BorderColor, Height } from "@mui/icons-material";
import { colors } from "@mui/material";
import {
  deepOrange,
  orange,
  teal,
  cyan,
  lightBlue,
  grey,
  blueGrey,
  deepPurple,
} from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const HEADER_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const CONTENT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  custom: {
    headerHeight: HEADER_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    contentHeight: CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: lightBlue,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#673ab7",
        },
        secondary: orange,
      },
    },
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       '::-webkit-scrollbar': {
    //         width: "5px",
    //         height: "5px"
    //       },
    //       '::-webkit-scrollbar-thump': {backgroundColor: "#bd3c7"},
    //       '::-webkit-scrollbar-thump:hover': {backgroundColor: "#00b894"},
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          color: theme.palette.primary.main;
          fontSize: "0.875rem";
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {fontSize: "0.875rem"}
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0,875rem",
          ".MuiOutlinedInput-notchedOutline": {
            BorderColor: theme.palette.primary.light,
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              BorderColor: theme.palette.primary.main,
            },
          },
        }),
      },
    },
  },
});

export default theme;

