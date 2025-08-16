import * as React from "react";
import { cn } from "../../lib";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
