const SocialMediaButton = ({ icon, url = null, lightSwitch = false }) => {
  const liClassBase =
    " aspect-square h-9 w-9 items-center justify-center rounded-md outline-1 outline-night/5 dark:outline-light/5 transition-all duration-200 ease-in-out ";
  const classBasedOnType = lightSwitch
    ? liClassBase +
      " bg-night dark:bg-light  text-light dark:bg-light  dark:text-night dark:hover:text-night outline-0 hidden lg:flex"
    : liClassBase +
      "text-night/70 hover:bg-night/5 dark:text-light/70 dark:hover:bg-light/5 outline bg-transparent flex";
  return (
    <li className={classBasedOnType}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-4 w-4 items-center justify-center"
      >
        {icon}
      </a>
    </li>
  );
};

export default SocialMediaButton;
