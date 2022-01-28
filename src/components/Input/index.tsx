import { InputHTMLAttributes } from "react";
import { InputField, Container } from "./styles";
import { EnumError } from "../../types/enum";
import errorInput from "../../assets/images/errorInput.svg";
import validInput from "../../assets/images/validInput.svg";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: EnumError;
};

export default function Input({
  error = EnumError.blank,
  ...props
}: InputProps) {

  function imageValidation(value: EnumError) {
    switch (value) {
      case "1.5px solid #34C38F":
        return <img src={validInput} alt="validInput" />;
      case "1.5px solid #FA982F":
        return <img src={errorInput} alt="errorInput" />;
      default:
        return "";
    }
  }
  
  return (
    <Container>
      <InputField inputValid={error} {...props}></InputField>
      <div>{imageValidation(error)}</div>
    </Container>
  );
}
