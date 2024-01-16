const NavigationItem = ({ name, link = false }) => {
  return (
    <li>
      <a
        className="active group flex items-center py-3"
        href={link ? link : "#" + name}
      >
        <span className="bg-lightFaded mr-4 h-px w-8 transition-all duration-200 ease-in-out group-hover:w-16 group-hover:bg-night group-focus-visible:w-16 group-focus-visible:bg-night dark:group-hover:bg-light dark:group-focus-visible:bg-light"></span>
        <span className="text-lightFaded dark:text-nightFaded text-xs font-bold uppercase  tracking-widest group-hover:text-night group-focus-visible:text-night dark:group-hover:text-light dark:group-focus-visible:text-light ">
          {name}
        </span>
      </a>
    </li>
  );
};

export default NavigationItem;
