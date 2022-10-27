import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // primaryLight: "$green200",
      // primaryLightHover: "$green300",
      // primaryLightActive: "$green400",
      // primaryLightContrast: "$green600",
      // primary: "#4ADE7B",
      // primaryBorder: "$green500",
      // primaryBorderHover: "$green600",
      // primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      // primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "blue",
    },
    space: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    // "sizes": {},
    // "borderWidths": {},
    // "borderStyles": {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
