import { Data_Sections, Data_About, Data_experience } from "./data/data";
import { ThemeSwitcher } from "./components/common/buttons/mobileThemeSwitcher";
import LightswitchButton from "./components/common/buttons/lightSwitchButton";
import SocialMediaButton from "./components/common/buttons/socialMediaButton";
import NavItem from "./components/common/navItem";
import ExperienceItem from "./components/sections/experience/experienceItem";
import Section from "./components/common/section";
import Profile from "./components/sections/profile/profile";

export default function Home() {
  return (
    <div className="relative lg:flex lg:justify-between lg:gap-4 ">
      <div className="fixed -left-12 top-5 z-10 flex w-full justify-end sm:-left-12 lg:hidden">
        <ThemeSwitcher />
      </div>
      <header className="flex flex-col justify-between pt-10 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:py-24">
        <div className="mt-2">
          <Profile />
          <nav className="hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {Data_Sections.map((el) => (
                <NavItem name={el} key={el} />
              ))}
            </ul>
          </nav>
        </div>
        <ul className="my-8 flex items-center gap-3" aria-label="Social media">
          <SocialMediaButton socialmedia="github" username="salahmohsen" />
          <SocialMediaButton socialmedia="linkedin" username="salahmohsen" />
          <SocialMediaButton socialmedia="facebook" username="iSalahMohsen" />
          <LightswitchButton />
        </ul>
      </header>
      <div
        className="flex flex-col justify-between gap-36 text-lightFaded dark:text-nightFaded lg:mb-36 lg:h-screen lg:w-1/2 lg:py-24"
        id="container"
      >
        <Section name="About">
          <Data_About />
        </Section>
        <Section name="Previous Experience">
          {Data_experience.map((el) => (
            <ExperienceItem
              key={el.id}
              company={el.company}
              title={el.title}
              duration={el.duration}
              description={el.description}
              skills={el.skills}
            />
          ))}
        </Section>
      </div>
    </div>
  );
}
