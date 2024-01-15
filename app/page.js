import SocialMediaButton from "./components/buttons/socialMediaButton";
import { ThemeSwitcher } from "./components/mobileNavbar/themeSwitcher";
import MobileSectionTitle from "./components/navigation/mobileSectionTitle";
import NavigationItem from "./components/navigation/navigationItem";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <div className="fixed -left-12 top-5  z-50 flex w-full justify-end sm:-left-12 lg:hidden">
        <ThemeSwitcher />
      </div>
      <header className="flex flex-col justify-between pt-10 lg:sticky lg:top-0  lg:w-1/2 lg:py-24">
        <div className="mt-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <a href="/">Salah Mohsen</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
            Designer & Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I build pixel-perfect, accessible products for the web and beyond.
          </p>
          <nav className="hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <NavigationItem sectionTitleLowercase={"about"} />
              <NavigationItem sectionTitleLowercase={"skills"} />
              <NavigationItem sectionTitleLowercase={"projects"} />
              <NavigationItem sectionTitleLowercase={"previous experience"} />
              <NavigationItem
                sectionTitleLowercase={"resume"}
                link={"/assets/resume.pdf"}
              />
            </ul>
          </nav>
        </div>
        <ul
          className="mb-8 mt-8 flex items-center gap-3"
          aria-label="Social media"
        >
          <SocialMediaButton
            icon={<RiFacebookLine />}
            url={"https://facebook.com/iSalahMohsen"}
          />
          <SocialMediaButton
            icon={<RiInstagramLine />}
            url={"https://www.instagram.com/isalahmohsen/"}
          />
          <SocialMediaButton
            icon={<RiLinkedinLine />}
            url={"https://facebook.com/iSalahMohsen"}
          />
          <SocialMediaButton lightSwitch={true} icon={<ThemeSwitcher />} />
        </ul>
      </header>
      <section className="flex flex-col justify-between lg:h-screen lg:w-1/2 ">
        <section>
          <MobileSectionTitle sectionTitle="--->About Me" />
          <p className="">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation. My main focus
            these days is building products and leading projects for our clients
            at Upstatement. In my free time I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I’m not at the computer, I’m usually rock
            climbing, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds
          </p>
        </section>
        <section>
          <MobileSectionTitle sectionTitle="Skills" />
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation. My main focus
            these days is building products and leading projects for our clients
            at Upstatement. In my free time I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I’m not at the computer, I’m usually rock
            climbing, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds
          </p>
        </section>
        <section>
          <MobileSectionTitle sectionTitle="Previous Experience" />
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation. My main focus
            these days is building products and leading projects for our clients
            at Upstatement. In my free time I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I’m not at the computer, I’m usually rock
            climbing, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds
          </p>
        </section>
        <section>
          <MobileSectionTitle sectionTitle="About Me again" />
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation. My main focus
            these days is building products and leading projects for our clients
            at Upstatement. In my free time I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I’m not at the computer, I’m usually rock
            climbing, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds
          </p>
        </section>
        <section>
          <MobileSectionTitle sectionTitle="About Me" />
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation. My main focus
            these days is building products and leading projects for our clients
            at Upstatement. In my free time I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I’m not at the computer, I’m usually rock
            climbing, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds
          </p>
        </section>
      </section>
    </div>
  );
}
