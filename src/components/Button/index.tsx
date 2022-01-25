import { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export default function Button({ ...props }: ButtonProps) {
  return <Container {...props}>Texto</Container>;
}
