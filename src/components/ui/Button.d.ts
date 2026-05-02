import { type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
declare const buttonVariants: (props?: ({
    variant?: "outline" | "default" | "secondary" | "ghost" | "ghostWhite" | null | undefined;
    size?: "icon" | "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asMotion?: boolean;
}
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
