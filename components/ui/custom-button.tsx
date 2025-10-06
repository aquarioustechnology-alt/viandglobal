import React from "react"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "header" | "primary" | "secondary" | "tertiary"
  children: React.ReactNode
  asChild?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", children, asChild = false, ...props }, ref) => {
    const baseClasses = {
      header: "btn-header",
      primary: "btn-primary",
      secondary: "btn-secondary",
      tertiary: "btn-tertiary",
    }

    if (asChild) {
      return <span className={cn(baseClasses[variant], className)}>{children}</span>
    }

    return (
      <button className={cn(baseClasses[variant], className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
