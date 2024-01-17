import NavItem from "./navItem";
import { Data_Sections } from "@/app/data/data";

const Nav = () => {
  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {Data_Sections.map((el) => (
          <NavItem name={el} key={el} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
