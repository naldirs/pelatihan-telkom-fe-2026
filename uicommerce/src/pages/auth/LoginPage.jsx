import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginSchema";
import { loginApi } from "../../services/authService";

// PrimeReact
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils"; // Untuk styling error
import { useRef, useCallback } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const toast = useRef(null);

  // FIX 1: Tambahkan resolver dan ambil 'errors' dari formState
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        const res = await loginApi(data);

        toast.current.show({
          severity: "success",
          summary: "Berhasil",
          detail: "Selamat Datang!",
          life: 2000,
        });

        login(res);

        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } catch (err) {
        toast.current.show({
          severity: "error",
          summary: "Login Gagal",
          detail: err.response?.data?.message || "Email atau Password salah",
          life: 3000,
        });
      }
    },
    [login, navigate],
  );

  return (
    <div className="flex justify-content-center align-items-center h-screen surface-ground">
      <Toast ref={toast} />
      <Card className="w-25rem shadow-3 p-fluid">
        <div className="text-center mb-4">
          <h2 className="m-0">Admin Login</h2>
        </div>

        {/* eslint-disable-next-line react-hooks/refs */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* USERNAME */}
          <div className="field mb-3">
            <label
              htmlFor="username"
              className={classNames({ "p-error": errors.username })}
            >
              Username
            </label>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText
                  {...field}
                  id="username"
                  className={classNames({ "p-invalid": errors.username })}
                />
              )}
            />
            {/* FIX 2: Tampilkan pesan error */}
            {errors.username && (
              <small className="p-error">{errors.username.message}</small>
            )}
          </div>

          {/* PASSWORD */}
          <div className="field mb-4">
            <label
              htmlFor="password"
              className={classNames({ "p-error": errors.password })}
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Password
                  {...field}
                  id="password"
                  toggleMask
                  feedback={false}
                  className={classNames({ "p-invalid": errors.password })}
                />
              )}
            />
            {/* FIX 3: Tampilkan pesan error */}
            {errors.password && (
              <small className="p-error">{errors.password.message}</small>
            )}
          </div>

          <Button
            type="submit"
            label={isSubmitting ? "Please wait..." : "Login"}
            icon={!isSubmitting ? "pi pi-sign-in" : undefined}
            loading={isSubmitting}
            className="w-full"
          />
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
