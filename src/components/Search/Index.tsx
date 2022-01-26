import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import searchImg from '../../assets/images/searchImg.svg'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Search({ ...props }: InputProps) {
  return (
    <Container>
      <input {...props} />
      <button><img src={searchImg} alt="search symbol" /></button>
    </Container>
  );
}
