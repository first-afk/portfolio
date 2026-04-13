import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  color = 'primary',
  ...props
}) => {
  const baseClass = "relative font-medium rounded-md transition-colors";
  const variants = {
    primary: "bg-primary text-black hover:bg-opacity-90",
    secondary: "bg-neutral-600 text-primary hover:bg-opacity-90",
    outline: "border border-primary text-primary ",
  };
  const sizes = {
    small: "px-2 py-1.5 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
  };
  const colors = {
    none: "",
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  const finalClass = `${baseClass} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className}`;

  return (
    <>
      <div className="relative">
        <div className={`absolute -inset-1 ${colors[color]} opacity-50 blur-sm rounded-md `}></div>
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={finalClass}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
