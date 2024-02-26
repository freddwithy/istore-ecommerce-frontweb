import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
    children,
    disabled,
    className,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(
                `
                w-auto 
                rounded-full 
                bg-black 
                px-4 
                py-2
                disabled:cursor-not-allowed
                disabled:opacity-50
                font-semibold
                hover:opacity-75
                transition-all
                text-white
                `,
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button;