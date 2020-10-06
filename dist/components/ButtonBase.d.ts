import React, { MouseEvent, ReactNode } from 'react';
export declare type BaseButtonChildrenProps = {
    disabled?: boolean;
};
export declare type ButtonBaseProps = {
    id?: string;
    disabled?: boolean;
    className?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    children?: (props: BaseButtonChildrenProps) => ReactNode;
};
export declare const ButtonBase: React.FC<ButtonBaseProps>;
