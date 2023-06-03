import { PropTypes } from "prop-types";

function GameAbout({ desc }) {
  const description = desc.map((desc) => (
    <p key={desc} className="mt-2 leading-5">
      {desc}
    </p>
  ));

  return (
    <div className="mt-3 rounded-lg bg-darkBg2 p-4 md:mb-4 md:mt-0">
      <article className={``}>
        <h2 className="border-b-2 font-heading text-xl font-bold tracking-wider xs:text-2xl">
          About
        </h2>
        <div className="scrollbar-dark mt-2 h-fit max-h-80 overflow-y-auto scroll-smooth font-content text-sm font-light text-darkText xs:text-base">
          {description}
        </div>
      </article>
    </div>
  );
}

GameAbout.propTypes = {
  desc: PropTypes.array,
};

export default GameAbout;
