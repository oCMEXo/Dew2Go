import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg"
}

const Button = ({ className, size = "md", ...props }: ButtonProps) => {
    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-8 py-5 text-lg",
    }

    return (
        <button
            className={cn(
                "rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                sizes[size],
                className
            )}
            {...props}
        />
    )
}

export default Button