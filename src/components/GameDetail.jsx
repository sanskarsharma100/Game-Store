import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import heartEmpty from "../assets/heartEmpty.svg";
import heartFilled from "../assets/heartFilled.svg";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { MainContext } from "../Context/MainContext";

function GameDetail({ gamesList, toggleFavourite }) {
  const params = useParams();
  const game = gamesList[params.id - 1];
  const { cart, addToCart } = useContext(MainContext);

  let indianRs = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const description = game.description.map((desc) => (
    <p key={desc} className="mt-2 leading-5">
      {desc}
    </p>
  ));

  return (
    <div className="relative min-h-screen w-full gap-2 bg-darkBg px-4 py-4 text-lightText lg:px-10">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h1 className="h-fit text-center font-heading text-4xl font-black tracking-wide xs:text-left">
          {game.name}
        </h1>
      </div>
      <div className="justify-between gap-5 md:flex">
        <section className="mx-auto my-0 aspect-[16/9] overflow-hidden md:min-w-[60%]">
          <ImageSlider images={game.preview} />
        </section>
        <div className="flex flex-col-reverse justify-between pt-3 md:flex-col md:pt-0">
          <div className="mt-3 rounded-lg bg-darkBg2 p-4 md:mb-4 md:mt-0">
            <motion.article
              className={`max-h-80 overflow-y-scroll`}
            >
              <h2 className="border-b-2 font-heading text-2xl font-bold tracking-wider">
                About
              </h2>
              <div className="mt-2 font-text font-normal">{description}</div>
            </motion.article>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-between rounded-lg bg-darkBg2 px-4 py-2 text-xl w-full">
              <p className="font-bold">
                {indianRs.format(game.price).slice(0, -3)}
              </p>
              <button
                className={`rounded-lg px-2 py-1 font-medium duration-300 ${
                  cart.includes(game.id)
                    ? ` text-success `
                    : ` text-lightText hover:text-darkHover`
                }`}
                onClick={() => addToCart(game.id, game.price)}
              >
                {cart.includes(game.id) ? "Added" : "Add"} to cart
              </button>
            </div>
            <figure className="p-3 bg-darkBg2 rounded-lg">
              <img
                src={game.isFavorite ? heartFilled : heartEmpty}
                alt="emptyHeart"
                id={game.id}
                className={`m-auto w-9 select-none duration-300 hover:cursor-pointer ${
                  game.isFavorite || `hover:drop-shadow-4xl`
                }`}
                onClick={toggleFavourite}
              />
            </figure>
          </div>
        </div>
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
