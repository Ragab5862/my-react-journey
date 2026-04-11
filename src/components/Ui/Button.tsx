import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  ClassName?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, ClassName, width, ...rest }: Iprops) => {
  const mergedClassName = `${className ?? ClassName ?? ""} ${width ?? ""} text-white rounded-md p-1`.trim();

  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
