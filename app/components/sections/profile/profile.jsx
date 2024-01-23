import {
  profileDescription,
  profileName,
  profileTitle,
} from "@/app/data/meta_data";

const Profile = () => {
  return (
    <>
      <h1 className="flex items-baseline text-4xl font-bold tracking-tight sm:text-5xl">
        <a href="/">{profileName}</a>
        <span className="ml-0.5 aspect-square h-2 animate-bounce rounded-full bg-orange"></span>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
        {profileTitle}
      </h2>
      <p className="mt-4 max-w-xs leading-normal dark:text-nightFaded">
        {profileDescription}
      </p>
    </>
  );
};

export default Profile;
