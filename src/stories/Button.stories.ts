import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components";

const meta = {
  title: "shared/ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["default", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "md"],
    },
    className: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    className: "",
    disabled: false,
  },
};
