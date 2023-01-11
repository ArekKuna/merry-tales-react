import ReactMarkdown from 'react-markdown';

const variantMap = {
  cthulhu: `Tabletop RPG games are sort of my childish love, but honestly I
            never give them up. I’ve been working as a translator (****Core Book****
            &amp; ****Alone Against the Dark****) and scenario writer for the Polish 7th
            ed. ****Call of Cthulhu**** (additional campaign books). Lately I’ve been
            involved in the group of authors creating the project ****Zgrozy-Call of
            Cthulhu RPG Supplements****.`,
  otherTabletops: `My scenario for ****Blades in the Dark**** was published in ****Nowa Fantastyka****
            magazine. I also had the pleasure to write supplements for Polish
            5th ed. ****Vampire the Masquerade****, ****Sibir Punk**** and ****Nibiru RPG****. My
            personal favourite though is the scenario for ****Tales from the Loop****
            that I wrote in cooperation with ****Majka Jeżowska****.`,
};

const TabletopParagraph = ({ variant }) => {
  const variantMarkdown = variantMap[variant];

  return (
    <ReactMarkdown className='px-4 mb-14 text-base text-center text-white sm:max-w-[75%] md:max-w-[60%] xl:mb-0 xl:p-0 xl:max-w-[40%]'>
      {`${variantMarkdown}`}
    </ReactMarkdown>
  );
};

export default TabletopParagraph;
