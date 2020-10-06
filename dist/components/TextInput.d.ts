import { FieldProps } from 'formik';
import React, { InputHTMLAttributes } from 'react';
declare type InputProps = {
    label?: string;
    error?: string;
};
export declare type TextInputProps = InputProps & FieldProps & InputHTMLAttributes<HTMLInputElement>;
export declare const TextInput: React.FC<TextInputProps>;
export {};
