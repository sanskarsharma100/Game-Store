import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { useState } from "react";
import { motion } from "framer-motion";

function GameDetail({ gamesList, toggleFavourite }) {
  const params = useParams();
  const game = gamesList[params.id - 1];
  const [readMore, setReadMore] = useState(false);

  const description = game.description.map((desc) => (
    <p key={desc} className="mt-2 leading-5">
      {desc}
    </p>
  ));

  const expandEffect = {
    expand: {
      height: "100%",
      cursor: "pointer",
    },
    shrink: {
      height: "10rem",
      cursor: "pointer",
    },
  };

  return (
    <div className="relative min-h-screen w-full gap-2 bg-darkBg px-3 py-4 text-lightText">
      <h1 className="mb-3 h-fit text-center font-heading text-4xl font-black tracking-wide xs:text-left">
        {game.name}
      </h1>
      <section className="mx-auto my-0 aspect-[16/9] overflow-hidden">
        <ImageSlider images={game.preview} />
      </section>
      <div className="mt-3 rounded-lg bg-darkBg2">
        <motion.article
          initial={"shrink"}
          animate={readMore ? "expand" : "shrink"}
          variants={expandEffect}
          className={`overflow-hidden px-4 pt-4`}
        >
          <h2 className="border-b-2 font-heading text-2xl font-bold tracking-wider">
            About
          </h2>
          <div className="mt-2 font-text font-normal">{description}</div>
        </motion.article>
        <button
          className="mt-1 w-full rounded-b-lg bg-cardHover p-1 font-heading font-bold shadow-5xl hover:text-neonPink"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Hide" : "Read more"}
        </button>
      </div>
      <section className="mt-3 rounded-lg bg-darkBg2 p-4">
        <h3 className="border-b-2 font-heading text-2xl font-bold tracking-wider">
          Requirements
        </h3>
        <div className="mt-3 grid gap-4 ss:flex">
          <div className="flex-[50%]">
            <p className="text-lg italic">Minimum</p>
            <ul className="text-base">
              {game.requirements.minimum.os && (
                <li>
                  <span className="font-bold">OS:</span>{" "}
                  {game.requirements.minimum.os}
                </li>
              )}
              {game.requirements.minimum.processor && (
                <li>
                  <span className="text-lg font-bold">Processor:</span>{" "}
                  {game.requirements.minimum.processor}
                </li>
              )}
              {game.requirements.minimum.memory && (
                <li>
                  <span className="text-lg font-bold">Memory:</span>{" "}
                  {game.requirements.minimum.memory}
                </li>
              )}
              {game.requirements.minimum.graphics && (
                <li>
                  <span className="text-lg font-bold">Graphics:</span>{" "}
                  {game.requirements.minimum.graphics}
                </li>
              )}
              {game.requirements.minimum.directX && (
                <li>
                  <span className="text-lg font-bold">DirectX:</span>{" "}
                  {game.requirements.minimum.directX}
                </li>
              )}
              {game.requirements.minimum.storage && (
                <li>
                  <span className="text-lg font-bold">Storage:</span>{" "}
                  {game.requirements.minimum.storage}
                </li>
              )}
              {game.requirements.minimum.soundCard && (
                <li>
                  <span className="text-lg font-bold">Sound Card:</span>{" "}
                  {game.requirements.minimum.soundCard}
                </li>
              )}
            </ul>
          </div>
          <hr />
          <div className="flex-[50%]">
            <p className="text-lg italic">Recommended</p>
            <ul className="text-base">
              {game.requirements.recommended.os && (
                <li>
                  <span className="font-bold">OS:</span>{" "}
                  {game.requirements.recommended.os}
                </li>
              )}
              {game.requirements.recommended.processor && (
                <li>
                  <span className="text-lg font-bold">Processor:</span>{" "}
                  {game.requirements.recommended.processor}
                </li>
              )}
              {game.requirements.recommended.memory && (
                <li>
                  <span className="text-lg font-bold">Memory:</span>{" "}
                  {game.requirements.recommended.memory}
                </li>
              )}
              {game.requirements.recommended.graphics && (
                <li>
                  <span className="text-lg font-bold">Graphics:</span>{" "}
                  {game.requirements.recommended.graphics}
                </li>
              )}
              {game.requirements.recommended.directX && (
                <li>
                  <span className="text-lg font-bold">DirectX:</span>{" "}
                  {game.requirements.recommended.directX}
                </li>
              )}
              {game.requirements.recommended.storage && (
                <li>
                  <span className="text-lg font-bold">Storage:</span>{" "}
                  {game.requirements.recommended.storage}
                </li>
              )}
              {game.requirements.recommended.soundCard && (
                <li>
                  <span className="text-lg font-bold">Sound Card:</span>{" "}
                  {game.requirements.recommended.soundCard}
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

GameDetail.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default GameDetail;
