import { ButtonHTMLAttributes, ReactChild } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactChild;
};

export default function Button({ children, ...props }: ButtonProps) {
  return <Container {...props}>{children}</Container>;
}
