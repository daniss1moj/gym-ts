import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Htag({ children }: Props) {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
}

export default Htag;
