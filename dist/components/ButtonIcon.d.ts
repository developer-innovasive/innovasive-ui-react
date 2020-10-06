import React, { MouseEvent, ReactNode } from 'react';
export declare type ButttonIconProps = {
    children: ReactNode;
    disabled: boolean;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};
export declare const ButtonIcon: React.FC<ButttonIconProps>;
