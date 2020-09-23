import "./Input.css";

import React, { ChangeEvent } from "react";
import { Field } from "formik";

export type TextInputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  value?: string | number;
  type?: "text" | "password" | "number";
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  innerRef?: any;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  disabled,
  value,
  type = "text",
  innerRef,
  onChange,
}) => {
  return (
    <div>
      <div className="mb-2">{label}</div>
      <input
        ref={innerRef}
        type={type || "text"}
        disabled={disabled}
        className={`w-full border ${
          disabled
            ? "bg-innovasive-ui-disabled-light border-innovasive-ui-disabled-dark cursor-not-allowed"
            : "bg-white"
        } ${
          error ? "border-innovasive-ui-error" : "focus:border-black "
        }  outline-none h-12 px-6 transition-all duration-200 ease-in-out placeholder`}
        style={{
          borderRadius: "3px",
        }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
      <div
        className={`mt-2 text-innovasive-ui-error transform ${
          error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        } transition-all h-6 duration-500 ease-in-out`}
      >
        {error}
      </div>
    </div>
  );
};

export type TextInputFormikProps = {
  name: string;
};

export const TextInputFormik: React.FC<TextInputFormikProps> = (
  props: TextInputFormikProps
) => {
  return (
    <Field name={props.name}>
      {({ field, meta }: any) => (
        <TextInput {...field} error={meta.error} {...props} />
      )}
    </Field>
  );
};
