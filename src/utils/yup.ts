import * as Yup from "yup";

export const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(4, "warning")
    .required("This field is required"),
});
