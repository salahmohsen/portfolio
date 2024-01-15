"use client";

const MobileSectionTitle = ({ sectionTitle }) => {
  return (
    <div className=" sticky top-2  flex h-10 items-center justify-between rounded-md  bg-night/15 px-1 backdrop-blur-3xl dark:border-faded sm:-ml-8 sm:px-8 lg:hidden ">
      <p className="font-bold">{sectionTitle}</p>
    </div>
  );
};

export default MobileSectionTitle;
