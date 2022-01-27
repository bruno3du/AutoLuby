import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import searchImg from "../../assets/images/searchImg.svg";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
};

export default function Search({ width, ...props }: InputProps) {
  return (
    <Container width={width}>
      <input {...props} />
      <button>
        <img src={searchImg} alt="search symbol" />
      </button>
    </Container>
  );
}
