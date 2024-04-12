import React from "react";

const sizes = {
  s: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xs: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-satoshi ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
