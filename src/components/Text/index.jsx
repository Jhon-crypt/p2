import React from "react";

const sizes = {
  xs: "text-xs font-medium",
  lg: "text-lg font-medium",
  s: "text-sm font-medium",
  "2xl": "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  xl: "text-2xl font-medium md:text-[22px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-500 font-satoshi ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
