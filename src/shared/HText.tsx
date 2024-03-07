import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-9/12 font-poppins text-3xl font-semibold uppercase">
      {children}
    </h1>
  );
};

export default HText;
