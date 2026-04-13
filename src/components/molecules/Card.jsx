import React from "react";

const Card = ({
  children,
  title,
  subtitle,
  className = "",
  padding = "normal",
  color = "secondary",
  height = "normal",
}) => {
  const paddings = {
    none: "",
    smaller: "p-2",
    small: "p-4",
    normal: "p-6",
    large: "p-8",
  };
  const heights = {
    smaller: "h-24",
    small: "h-32",
    normal: "h-48",
    large: "h-64",
  };
  return (
    <>
      <div className="relative">
        <div
          className={`absolute -inset-0.5 bg-${color} opacity-50 blur-sm rounded-md`}
        ></div>
        <div
          className={`relative bg-neutral-900 border border-${color} rounded-md ${className} ${heights[height]}`}
        >
          {(title || subtitle) && (
            <div className={paddings[padding]}>
              {title && (
                <p className={`text-xs text-${color} capitalize`}>{title}</p>
              )}
              {subtitle && (
                <p className="text-2xl font-semibold text-gray-300 capitalize">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          <div className={paddings[padding]}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
