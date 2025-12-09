import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen">
      {/* El Layout ya no centra nada, deja que la página hija decida */}
      <Outlet />
    </div>
  );
};
