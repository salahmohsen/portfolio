import { ThemeSwitcher } from "./mobileThemeSwitcher";

const LightswitchButton = () => {
  return (
    <li className="hidden aspect-square h-9 w-9 items-center justify-center rounded-md bg-night text-light outline-0 outline-night/5 transition-all duration-200  ease-in-out dark:bg-light dark:text-night dark:outline-light/5 dark:hover:text-night lg:flex">
      <span className="flex h-4 w-4 items-center justify-center">
        <ThemeSwitcher />
      </span>
    </li>
  );
};

export default LightswitchButton;
