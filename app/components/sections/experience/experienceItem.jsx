const ExperienceItem = ({ company, title, duration, description, skills }) => {
  return (
    <li className="mb-12">
      <div className=" group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-4 -z-10 hidden rounded-md transition-all duration-200 ease-in-out lg:-inset-x-6 lg:block lg:group-hover:bg-night lg:group-hover:drop-shadow-lg"></div>
        <header className=" mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 lg:group-hover:text-light">
          {duration}
        </header>
        <div className="sm:col-span-6">
          <h3 className="mb-2 inline-flex items-baseline gap-2 font-medium leading-tight lg:group-hover:text-light">
            <span>{title}</span>
            <span>•</span>
            <span>{company}</span>
          </h3>
          <p className="text-sm leading-normal lg:group-hover:text-light">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
