import * as React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return <button className="px-4 py-2 rounded-2xl bg-orange-800 text-slate-300">{text}</button>;
};

export default Button;
