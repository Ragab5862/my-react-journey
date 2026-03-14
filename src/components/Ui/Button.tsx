import { type ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  ClassName?: string;
  width?:"w-full"|"w-fit"
}

const Button = ({ children, ClassName, width, ...rest }: Iprops) => {
  return <button className={`${ClassName} ${width} text-white rounded-md p-1`} {...rest}>{children}</button>;
};

export default Button;
