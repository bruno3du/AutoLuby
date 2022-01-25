import { InputHTMLAttributes } from "react";
import { Container } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export default function Input({ ...props }: InputProps) {
  return <Container {...props} />;
}
