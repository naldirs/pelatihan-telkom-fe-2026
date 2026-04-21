import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().required("Username wajib diisi"),

  password: yup
    .string()
    .min(3, "Minimal 3 karakter")
    .required("Password wajib diisi"),
});
