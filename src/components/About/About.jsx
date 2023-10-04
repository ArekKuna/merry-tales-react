import ArrowDown from "components/Icons/ArrowDown/ArrowDown";
import { useState } from "react";

import AboutParagraph from "components/About/AboutParagraph/AboutParagraph";
import BlurredUpImage from "components/BlurredUpImage/BlurredUpImage";
import LowResImage from "components/LowResImage/LowResImage";

import { homePageImages } from "data/homePageImages";

const About = () => {
  const [more, setMore] = useState(false);

  const { professional } = homePageImages;

  const handleMore = () => {
    setMore((prevState) => !prevState);
  };

  return (
    <div className="w-full mb-20 flex flex-col items-center text-base text-ghostWhite xl:py-0 xl:mb-0 xl:flex-row xl:text-xs 2xl:text-base">
      <div className="relative w-full min-h-[350px] mb-14 flex justify-center object-cover bg-gray-500 sm:w-1/2 lg:w-1/3 xl:mb-0 xl:w-1/2">
        <LowResImage src={professional.src} alt={professional.alt} />
        <BlurredUpImage src={professional.src} alt={professional.alt} />
      </div>
      <div className="sm:w-3/4">
        <div className="px-4 xl:px-12">
          <AboutParagraph>
            Hi! I’m a storyteller with a knack for rhetoric and acting. I’m
            currently working as a writer and narrative designer at Flying Wild
            Hog game studio.
          </AboutParagraph>
          <div
            className={
              !more
                ? "max-h-0 overflow-hidden transition-all ease-in-out duration-1000"
                : "max-h-[550px] overflow-hidden transition-all duration-1000"
            }
          >
            <AboutParagraph>
              Since my early childhood I’ve been exploring and creating
              fictional settings in games, be it the tabletop RPG or video
              games. I’ve grown up on the{" "}
              <span className="font-extrabold italic">Call of Cthulhu</span> and{" "}
              <span className="font-extrabold italic">DnD</span>, started my
              career as an RPG writer, then moved forward to the game industry.
              Writing and designing the narrative have become my forte. In my
              free time I practise boxing and do amateur theatre. Other than
              that I host a radio broadcast covering the topic of music in
              games. Other than that I’ve hosted a&nbsp;
              <a
                href="https://radiospacja.pl/shows/groteka/"
                target="_blank"
                rel="noreferrer"
                className="font-extrabold underline underline-offset-4 text-orange-700"
              >
                radio broadcast
              </a>
              &nbsp;covering the topic of music in games. And so far, so good!
              ;)
            </AboutParagraph>
          </div>
          <div className="flex justify-end items-center">
            <p
              className="mr-2 font-semibold underline underline-offset-2 cursor-pointer"
              onClick={handleMore}
            >
              {more ? "less" : "more"}
            </p>
            <ArrowDown
              className={
                more
                  ? "text-lg rotate-180 transition-all duration-700"
                  : "text-lg transition-all duration-700"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
