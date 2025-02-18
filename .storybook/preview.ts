import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../src/theme";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(CssBaseline),
        React.createElement(Story, null)
      ),
  ],
};

export default preview;
