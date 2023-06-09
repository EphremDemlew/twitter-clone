import React from "react";

interface InputProps {
  placeHolder?: string;
  type?: string;
  disabled?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  placeHolder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      type={type}
      className="w-full p-4 text-lg dark:bg-black border-2 border-neural-400  dark:border-neutral-800 rounded-md outline-none text-black dark:text-white  focus:border-orange-500 focus:border-2 disabled:bg-neutral-300 dark:disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed transition"
    />
  );
};

export default Input;
