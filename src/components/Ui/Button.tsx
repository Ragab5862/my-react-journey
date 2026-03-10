import { type ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  ClassName?: string;
}

const Button = ({ children, ClassName }: Iprops) => {
  return <button className={`${ClassName} w-full text-white rounded-md p-1`}>{children}</button>;
};

export default Button;
