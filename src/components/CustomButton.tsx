// import React from "react";
// import Button, { ButtonProps } from "@mui/material/Button";

// export interface CustomButtonProps extends ButtonProps {
//   children: React.ReactNode;
// }

// export const CustomButton: React.FC<CustomButtonProps> = ({
//   children,
//   variant = "contained",
//   color = "primary",
//   size = "medium",
//   ...props
// }) => {
//   return (
//     <Button variant={variant} color={color} size={size} {...props}>
//       {children}
//     </Button>
//   );
// };

// export default CustomButton;

import type React from "react";
import { Button, type ButtonProps } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
  label: string;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <Button className={`custom-button ${className || ""}`} {...props}>
      {label}
    </Button>
  );
};
