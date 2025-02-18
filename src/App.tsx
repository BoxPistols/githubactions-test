import { ThemeProvider } from "@mui/material/styles";
import { CustomButton } from "./components/CustomButton";
import { theme } from "./theme";
import "./styles/index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="p-12">
        <h1 className="text-2xl font-bold mb-4">
          MUI 6 + Vite + TS + Tailwind + Storybook
        </h1>
        <CustomButton label="Default" />
      </div>
    </ThemeProvider>
  );
}

export default App;
