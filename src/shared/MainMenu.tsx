import { NavLink } from "react-router-dom";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/portfolio", label: "Work", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/pricing", label: "Pricing", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function MainMenu() {
  return (
    <MainMenuRootList>
      {NAV_ITEMS.map((item) => (
        <li key={item.to}>
          <NavLink to={item.to} end={item.end} className={({ isActive }) => (isActive ? "active" : undefined)}>
            <span className="at-link-swap">
              <span className="text-1">{item.label}</span>
              <span className="text-2">{item.label}</span>
            </span>
          </NavLink>
        </li>
      ))}
    </MainMenuRootList>
  );
}
