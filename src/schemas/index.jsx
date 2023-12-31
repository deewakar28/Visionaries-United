import * as Yup from "yup";

export const signUpSchema = Yup.object({
  //name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter an email"),
  password: Yup.string().min(8).required("Please enter your password").matches(
    /^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
    'Password must contain at least one special character'
  ),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password must match"),
});