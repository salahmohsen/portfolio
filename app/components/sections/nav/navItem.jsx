"use client";

const NavItem = ({ name, selected, setSelected }) => {
  const link =
    typeof name === "string"
      ? `#${name.replace(/\s/g, "").toLowerCase()}`
      : name[1];

  const nameText = typeof name === "string" ? name : name[0];
  return (
    <li onClick={() => setSelected(typeof name === "string" ? name : selected)}>
      <a className={`group flex items-center py-3`} href={link}>
        <span
          className={`${selected === nameText ? "w-16 bg-night dark:bg-light" : "w-8 bg-night/50 dark:bg-light/50"} mr-4 h-px   transition-all duration-200 ease-in-out group-hover:w-16 group-hover:bg-night group-focus-visible:w-16 group-focus-visible:bg-night dark:group-hover:bg-light dark:group-focus-visible:bg-light`}
        ></span>
        <span
          className={`${selected === nameText ? "text-night dark:text-light" : "text-night/50 dark:text-light/50"} text-xs font-bold uppercase tracking-widest group-hover:text-night group-focus-visible:text-night dark:text-nightFaded dark:group-hover:text-light dark:group-focus-visible:text-light`}
        >
          {nameText}
        </span>
      </a>
    </li>
  );
};

export default NavItem;
