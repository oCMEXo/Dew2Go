import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size = "md", ...props }, ref) => {
        const sizes = {
            sm: "px-3 py-2 text-sm",
            md: "px-5 py-3 text-base",
            lg: "px-8 py-5 text-lg",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"
