import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  // コンポーネントのデフォルト引数を設定
  args: {
    variant: "contained", // デフォルトのバリアント
    color: "primary", // デフォルトの色
  },
  argTypes: {
    variant: {
      control: { type: "select", options: ["contained", "outlined", "text"] },
      description: "ボタンの表示スタイル",
      table: {
        defaultValue: { summary: "contained" },
      },
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
      description: "ボタンの色",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    label: "Click me",
    variant: "contained", // 明示的に指定
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
