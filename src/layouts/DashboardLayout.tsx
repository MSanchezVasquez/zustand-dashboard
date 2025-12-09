import { SideMenu } from "../components";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores";

export const DashboardLayout = () => {
  // 1. Obtenemos el status del store
  const authStatus = useAuthStore((state) => state.status);

  // 2. Verificamos la autenticación (Guardia)
  if (authStatus === "pending") {
    return <div>Cargando...</div>; // O un spinner bonito
  }

  if (authStatus === "unauthorized") {
    return <Navigate to="/auth/login" />;
  }
  return (
    <div className="bg-slate-200 overflow-y-scroll w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
      <div className="flex flex-row relative w-screen">
        <SideMenu />

        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
