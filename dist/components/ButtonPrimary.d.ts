import React, { MouseEvent } from 'react';
export declare type ButtonPrimaryProps = {
    id?: string;
    title?: string;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
export declare const ButtonPrimary: React.FC<ButtonPrimaryProps>;
