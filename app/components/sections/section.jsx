const Section = ({ name, children }) => {
  const id = name.replace(/\s/g, "").toLowerCase();
  return (
    <section
      id={id}
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24`}
    >
      <div className="sticky top-0 z-10 -ml-4 mb-4 flex h-10 w-screen items-center justify-between bg-light/15 px-1 pl-4 backdrop-blur-md dark:border-nightFaded dark:bg-night/15 sm:-ml-8 sm:pl-8 lg:sr-only lg:top-auto lg:opacity-0 ">
        <p className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          {name}
        </p>
      </div>
      {children}
    </section>
  );
};

export default Section;
