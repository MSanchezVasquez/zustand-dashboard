import { FormEvent, useEffect } from "react";
import { useAuthStore } from "../../stores";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  // Obtenemos estado y acciones del store
  const login = useAuthStore((state) => state.login);
  const authStatus = useAuthStore((state) => state.status);

  // Efecto: Si ya estoy autorizado, mándame al dashboard
  useEffect(() => {
    if (authStatus === "authorized") {
      navigate("/dashboard");
    }
  }, [authStatus, navigate]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Casting seguro para leer los valores
    const { username, password } = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };

    try {
      await login(username.value, password.value);
      // No necesitamos navegar aquí, el useEffect lo hará automáticamente
      // cuando cambie el status a 'authorized'
    } catch (error) {
      console.log("Error en login");
    }

    // Limpiar formulario
    username.value = "";
    password.value = "";
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Login</h1>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Username</label>
          <input type="text" name="username" autoComplete="off" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input type="password" name="password" autoComplete="off" />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" name="remember" className="text-blue-500" />
          <label className="text-gray-600 ml-2">Remember Me</label>
        </div>

        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="bg-indigo-600">
          Login
        </button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <a href="#" className="hover:underline">
          Sign up Here
        </a>
      </div>
    </>
  );
};
