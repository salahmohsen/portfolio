const Section = ({ name, children }) => {
  const id = name.replace(/\s/g, "").toLowerCase();
  return (
    <>
      <div className=" sticky top-2 -ml-4 mb-10 flex h-10 w-screen items-center justify-between bg-night/15 px-1 pl-4 backdrop-blur-3xl dark:border-nightFaded  lg:hidden ">
        <p className="font-bold">{name}</p>
      </div>
      <section id={id} className="scroll-mt-24">
        {children}
      </section>
    </>
  );
};

export default Section;
