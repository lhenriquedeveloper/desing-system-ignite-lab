import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Title text",
  },
} as Meta<HeadingProps>;
export const Default: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const AnyComponent: StoryObj<HeadingProps> = {
  args: {
    children: <h1>Heading with H1</h1>,
    size: "md",
  },
};
