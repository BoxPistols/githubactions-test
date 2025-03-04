import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "BoxPistolsDesignSystem",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@mui/material/styles",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: ["src/components/**/*", "src/theme.ts"],
      exclude: ["src/**/*.stories.tsx", "src/App.tsx", "src/main.tsx"],
      rollupTypes: true,
      insertTypesEntry: true,
      bundledPackages: ["@mui/material"],
    }),
  ],
});
