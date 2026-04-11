import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line no-empty-pattern
const Input = ({...results}: IProps) => {
  return (
  <div className="flex flex-col" >
      <input className="border-2 border-gray-400" {...results}/>
    </div>
  );
}

export default Input;
