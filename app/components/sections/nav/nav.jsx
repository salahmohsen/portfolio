import navbar_data from "@/app/data/navbar_data";
import NavItem from "./navItem";

const Nav = () => {
  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navbar_data.map((el) => (
          <NavItem name={el} key={el} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
