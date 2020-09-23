import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import "./Input.css";

import { TextInput, TextInputProps } from "./Input";

export default {
  title: "TextInput",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});
export const Disable = Template.bind({});

Default.args = {
  label: "Label",
  placeholder: "Input Text",
};

Error.args = {
  label: "Label",
  placeholder: "Input Text",
  error: "Error Message",
};

Disable.args = {
  label: "Label",
  placeholder: "Input Text",
  disabled: true,
};
