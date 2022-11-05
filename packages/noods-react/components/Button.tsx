import * as React from "react";
export const Button = ({ children }) => {
  return <button onClick={() => console.log('Boop')}>{children}</button>;
};
