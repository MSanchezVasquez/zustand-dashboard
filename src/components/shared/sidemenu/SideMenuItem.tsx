import type { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

interface Props {
  href: string;
  Icon: IconType;
  title: string;
  subTitle: string;
}

export const SideMenuItem = ({ href, Icon, title, subTitle }: Props) => {
  return (
    <NavLink
      key={href}
      to={href}
      end
      className={({ isActive }) =>
        classNames(
          "relative flex items-center gap-4 px-4 py-3 m-2 rounded-xl transition-all duration-200 group",
          {
            // Estado Activo: Fondo azul muy suave y texto primario
            "bg-primary-50 text-primary-600 shadow-sm": isActive,
            // Estado Inactivo: Gris y hover suave
            "text-slate-500 hover:bg-slate-50 hover:text-slate-700": !isActive,
          }
        )
      }
    >
      <div className="flex items-center justify-center text-2xl">
        <Icon />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold leading-5 transition-colors">
          {title}
        </span>
        <span className="text-xs text-medium hidden md:block mt-1 transition-colors opacity-80 group-hover:opacity-100">
          {subTitle}
        </span>
      </div>
    </NavLink>
  );
};
