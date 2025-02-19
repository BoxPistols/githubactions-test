export { CustomButton } from "./components/CustomButton";
export type { CustomButtonProps } from "./components/CustomButton";

// MUI のテーマ設定をまとめたファイル（例えば src/theme.ts）を再エクスポートしておくと、
// 利用者が自前で ThemeProvider に渡すテーマとして使いやすくなります。
export { theme } from "./theme";
