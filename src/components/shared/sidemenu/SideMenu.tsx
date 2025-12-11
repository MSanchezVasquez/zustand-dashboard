import type { IconType } from "react-icons";
import {
  IoSpeedometerOutline,
  IoPawOutline,
  IoLogOutOutline,
  IoHeartOutline,
  IoListOutline,
  IoAccessibilityOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { SideMenuItem } from "./SideMenuItem";
import { useAuthStore } from "../../../stores";
import ButtonLang from "../../LangSwitcher";
import { useTranslation } from "react-i18next";

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

export const SideMenu = () => {
  const { t } = useTranslation();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const menuItems: MenuItem[] = [
    {
      title: t("sideMenu.dashboard.title"),
      subTitle: t("sideMenu.dashboard.subTitle"),
      href: "/dashboard",
      Icon: IoSpeedometerOutline,
    },
    {
      title: t("sideMenu.bears.title"),
      subTitle: t("sideMenu.bears.subTitle"),
      href: "/dashboard/bears",
      Icon: IoPawOutline,
    },
    {
      title: t("sideMenu.person.title"),
      subTitle: t("sideMenu.person.subTitle"),
      href: "/dashboard/person",
      Icon: IoAccessibilityOutline,
    },
    {
      title: t("sideMenu.tasks.title"),
      subTitle: t("sideMenu.tasks.subTitle"),
      href: "/dashboard/tasks",
      Icon: IoListOutline,
    },
    {
      title: t("sideMenu.wedding.title"),
      subTitle: t("sideMenu.wedding.subTitle"),
      href: "/dashboard/wedding-invitation",
      Icon: IoHeartOutline,
    },
  ];

  return (
    <div
      id="menu"
      className="bg-white min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll border-r border-slate-200 flex flex-col"
    >
      {/* Logo y Título */}
      <div id="logo" className="my-8 px-6">
        <div className="flex items-center justify-between">
  <h1 className="text-3xl font-black text-primary-600 flex items-center gap-2">
    <IoAnalyticsOutline />
    <span>Zustand</span>
  </h1>

  <ButtonLang  />
</div>
        <p className="text-slate-500 text-sm mt-1 font-medium">
          {t("sideMenu.logoSubtitle")}
        </p>
      </div>

      {/* Perfil (Separado visualmente) */}
      <div
        id="profile"
        className="px-6 py-6 border-y border-slate-100 mb-4 bg-slate-50/50"
      >
        <p className="text-xs text-slate-400 uppercase font-bold mb-3 tracking-wider">
          {t("sideMenu.welcome")}
        </p>
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-10 h-10 object-cover border-2 border-white shadow-sm"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80"
            alt="User Avatar"
          />
          <div>
            <span className="text-sm font-bold text-slate-700 block">
              {user?.fullName || t("sideMenu.user.defaultName")}
            </span>
            <span className="text-xs text-slate-500 block">
              {t("sideMenu.user.role")}
            </span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav id="nav" className="w-full px-4 flex-1 space-y-1">
        {menuItems.map((item) => (
          <SideMenuItem key={item.href} {...item} />
        ))}
      </nav>

      {/* Logout (Abajo del todo) */}
      <div className="p-4 mt-auto mb-4 border-t border-slate-100">
        <NavLink
          to={"/auth/login"}
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200 font-medium"
        >
          <IoLogOutOutline className="text-2xl" />
          <span className="text-base">{t("sideMenu.logout")}</span>
        </NavLink>
      </div>
    </div>
  );
};
