"use client";
import { ThemeSwitcher } from "./themeSwitcher";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4 w-full border-b dark:border-zinc-800 lg:fixed  ">
      <h1 className="font-bold">Salah Mohsen</h1>
      <div className="flex justify-between gap-4 items-center">
        <span className="font-semibold lg:font-bold ">
          Designer & Developer
        </span>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <a className="hidden lg:block" href="mailto:Contact@SalahMohsen.com">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
