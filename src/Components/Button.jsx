import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, variant, size, onClick, disabled, className }) => {
  const baseStyles =
    "font-medium rounded-lg transition duration-200 focus:outline-none";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        { "opacity-50 cursor-not-allowed": disabled },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
