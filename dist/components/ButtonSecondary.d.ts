import React, { MouseEvent } from 'react';
export declare type ButtonSecondaryProps = {
    id?: string;
    title?: string;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
export declare const ButtonSecondary: React.FC<ButtonSecondaryProps>;
