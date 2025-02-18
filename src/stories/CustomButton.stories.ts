import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    variant: {
      control: { type: "select", options: ["contained", "outlined", "text"] },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "error",
          "warning",
          "info",
          "success",
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    label: "Click me",
    variant: "contained",
    color: "primary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
    color: "secondary",
  },
};

export const Text: Story = {
  args: {
    label: "Text Button",
    variant: "text",
    color: "primary",
  },
};
