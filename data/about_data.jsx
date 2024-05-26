import ExternalLink from "../app/components/common/externalLink";

const About_data = () => {
  return (
    <>
      <p className="mb-5 text-pretty">
        Back in 2013, I started a career in photography, documenting hundreds of{" "}
        {
          <ExternalLink url="https://www.behance.net/gallery/69658683/2018s-Featured-wedding-photos">
            events
          </ExternalLink>
        }
        , publishing a{" "}
        {
          <ExternalLink url="https://www.madamasr.com/en/2019/03/21/panorama/u/me-and-the-moulid/">
            story in madamasr
          </ExternalLink>
        }
        , and getting shortlisted at a prestigious{" "}
        {
          <ExternalLink url="https://www.madamasr.com/en/2016/12/31/panorama/u/mada-publishes-the-shortlist-of-the-shawkan-photography-competition/">
            photography contest
          </ExternalLink>
        }
        . I worked for a major{" "}
        {
          <ExternalLink url="https://www.meyle-mueller.de/">
            media company
          </ExternalLink>
        }{" "}
        in Germany and a pioneering fashion{" "}
        {
          <ExternalLink url="https://tfk.me/">
            {" "}
            e-commerce platform
          </ExternalLink>
        }{" "}
        based in Egypt.
      </p>
      <p className="mb-5 text-pretty">
        But the desire to weave magic with pixels, not just light, combined with
        the itch to code couldn’t be ignored. So, in 2023, I began my journey in
        web development, trading shutter clicks for keyboard clacks. Now, I pour
        my artistic soul into crafting pixel-perfect, accessible products for
        the web and beyond.
      </p>
    </>
  );
};

export default About_data;
