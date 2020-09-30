import React, { ChangeEvent, KeyboardEvent } from 'react';
export declare type TextInputProps = {
    label?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    value?: string | number;
    type?: 'text' | 'password' | 'number';
    onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e?: KeyboardEvent<HTMLInputElement>) => void;
    innerRef?: any;
};
export declare const TextInput: React.FC<TextInputProps>;
export declare type FormikProps = {
    name: string;
};
export declare type TextInputFormikProps = TextInputProps & FormikProps;
export declare const TextInputFormik: React.FC<TextInputFormikProps>;
