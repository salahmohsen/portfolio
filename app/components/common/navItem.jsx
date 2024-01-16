"use client";

const NavItem = ({ name }) => {
  const link =
    typeof name === "string"
      ? `#${name.replace(/\s/g, "").toLowerCase()}`
      : name[1];

  const nameText = typeof name === "string" ? name : name[0];

  return (
    <li>
      <a className=" group flex items-center py-3" href={link}>
        <span className="mr-4 h-px w-8 bg-lightFaded transition-all duration-200 ease-in-out group-hover:w-16 group-hover:bg-night group-focus-visible:w-16 group-focus-visible:bg-night dark:group-hover:bg-light dark:group-focus-visible:bg-light"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-lightFaded  group-hover:text-night group-focus-visible:text-night dark:text-nightFaded dark:group-hover:text-light dark:group-focus-visible:text-light ">
          {nameText}
        </span>
      </a>
    </li>
  );
};

export default NavItem;
