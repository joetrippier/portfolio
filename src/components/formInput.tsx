import * as React from "react";

type FormInputProps = {
  children: any
};

const FormInput: React.FunctionComponent<FormInputProps> = ({ children }) => {
  return <div className="flex flex-col mb-4">{children}</div>;
};

export default FormInput;
