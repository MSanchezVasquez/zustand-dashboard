import { FormEvent, useEffect } from "react";
import { useAuthStore } from "../../stores";
import { useNavigate } from "react-router-dom";
import { IoLogoReact, IoLogInOutline } from "react-icons/io5";

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
    <div className="flex w-full h-screen overflow-hidden bg-slate-50">
      {/* --- Panel Izquierdo (Visual) --- */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative flex-col justify-center items-center">
        {/* Fondo con Gradiente y Patrón */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 opacity-90 z-0" />

        {/* Círculos decorativos (Blur effects) */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl z-0" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-12">
          <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl ring-1 ring-white/20">
            <IoLogoReact className="text-white text-6xl animate-spin-slow" />
          </div>

          <h2 className="text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Zustand <br /> State Manager
          </h2>
          <p className="text-indigo-100 text-lg font-medium max-w-md mx-auto leading-relaxed">
            Una demostración profesional de manejo de estado global,
            persistencia y slices en React.
          </p>
        </div>

        <div className="absolute bottom-8 text-indigo-200/60 text-sm font-medium">
          © {new Date().getFullYear()} Demo Project
        </div>
      </div>

      {/* --- Panel Derecho (Formulario) --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-3xl font-black text-slate-900 mb-2">
              Bienvenido de nuevo
            </h1>
            <p className="text-slate-500 font-medium">
              Ingresa tus credenciales para acceder al dashboard.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Input Usuario */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Usuario
              </label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="ej. edward"
                className="transition-all"
              />
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="••••••"
              />
            </div>

            {/* Opciones Extra */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-slate-600 cursor-pointer select-none"
                >
                  Recordarme
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <IoLogInOutline size={24} />
              <span>Ingresar al Sistema</span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="font-bold text-indigo-600 hover:underline">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
