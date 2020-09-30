import React, { MouseEvent, ReactElement } from 'react';
export declare type ButtonProps = {
    color?: string;
    children?: ReactElement;
    innerRef?: any;
    size?: 'Primary' | 'Secondary';
    onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
};
export declare const Button: React.FC<ButtonProps>;
