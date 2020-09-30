import { FC } from 'react';
declare type SelectOption = {
    id: string;
    value: string;
};
export declare type SelectProps = {
    label?: string;
    value: string;
    options: SelectOption[];
    disabled: boolean;
    error?: string;
    onChange?: (value: any) => void;
};
export declare const Select: FC<SelectProps>;
declare type ForkmikProps = {
    name: string;
};
export declare type SelectForkmikProps = ForkmikProps & SelectProps;
export declare const SelectFormik: FC<SelectForkmikProps>;
export {};
