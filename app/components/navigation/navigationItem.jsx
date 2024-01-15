const NavigationItem = ({ sectionTitleLowercase, link = false }) => {
  return (
    <li>
      <a
        className="active group flex items-center py-3"
        href={link ? link : "#" + sectionTitleLowercase}
      >
        <span className="mr-4 h-px w-8 bg-faded transition-all duration-200 ease-in-out group-hover:w-16 group-hover:bg-night group-focus-visible:w-16 group-focus-visible:bg-night dark:group-hover:bg-light dark:group-focus-visible:bg-light"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-faded  group-hover:text-night group-focus-visible:text-night dark:text-faded dark:group-hover:text-light dark:group-focus-visible:text-light ">
          {sectionTitleLowercase}
        </span>
      </a>
    </li>
  );
};

export default NavigationItem;
