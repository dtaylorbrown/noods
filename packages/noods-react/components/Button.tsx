import * as React from "react";
export const Button = ({ children }: any) => {
  return <button onClick={() => console.log("Boop")}>{children}</button>;
};
