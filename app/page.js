import { Data_About, Data_experience } from "./data/data";
import { ThemeSwitcher } from "./components/common/buttons/mobileThemeSwitcher";
import LightswitchButton from "./components/common/buttons/lightSwitchButton";
import SocialMediaButton from "./components/common/buttons/socialMediaButton";
import ExperienceItem from "./components/sections/experience/experienceItem";
import Section from "./components/sections/section";
import Profile from "./components/sections/profile/profile";
import Nav from "./components/sections/nav/nav";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <div className="fixed -left-12 top-3 z-20 flex w-full justify-end sm:-left-12 lg:hidden">
        <ThemeSwitcher />
      </div>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <Profile />
          <Nav />
        </div>
        <ul className="mt-8 flex items-center gap-3" aria-label="Social media">
          <SocialMediaButton socialmedia="github" username="salahmohsen" />
          <SocialMediaButton socialmedia="linkedin" username="salahmohsen" />
          <SocialMediaButton socialmedia="facebook" username="iSalahMohsen" />
          <LightswitchButton />
        </ul>
      </header>
      <main
        className="pt-24 text-lightFaded dark:text-nightFaded lg:mb-36 lg:w-1/2 lg:py-24"
        id="container"
      >
        <Section name="About">
          <Data_About />
        </Section>
        <Section name="Previous Experience">
          <div>
            <ol className="group/list">
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
            </ol>
          </div>
        </Section>
      </main>
    </div>
  );
}
