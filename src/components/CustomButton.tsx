// components/CustomButton.tsx
import React from "react";
import { Button, ButtonProps } from "@mui/material";

export interface CustomButtonProps extends Omit<ButtonProps, "children"> {
  label: string;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = "contained", // デフォルト値を設定
  color = "primary", // デフォルト値を設定
  ...props
}) => {
  console.log(`Rendering button with variant: ${variant}, color: ${color}`); // デバッグ用
  return (
    <Button variant={variant} color={color} {...props}>
      {label}
    </Button>
  );
};
