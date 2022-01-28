import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";
import searchImg from "../../assets/images/searchImg.svg";
import { useTableData } from "../../hooks/useTableData";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
  handleSearchBy?: (value: string) => Promise<void>;
};

export default function Search({
  handleSearchBy,
  width,
  ...props
}: InputProps) {
  const [value, setValue] = useState("");
  const { setModelValue } = useTableData();

  return (
    <Container width={width}>
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setModelValue(value)}>
        <img src={searchImg} alt="search symbol" />
      </button>
    </Container>
  );
}
