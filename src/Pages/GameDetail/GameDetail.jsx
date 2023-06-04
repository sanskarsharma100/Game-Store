import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import heartEmpty from "../../assets/heartEmpty.svg";
import heartFilled from "../../assets/heartFilled.svg";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { numberToRupees } from "../../Utils/utils";
import GameAbout from "./GameAbout";
import GameRequirements from "./GameRequirements";

function GameDetail({ gamesList, toggleFavourite }) {
  const params = useParams();
  const game = gamesList[params.id - 1];
  const { cart, addToCart } = useContext(MainContext);

  return (
    <div className="bg-black pb-20">
      <div
        style={{
          background: `linear-gradient(0deg, #000 0%, rgba(0,0,0,0.7) 99%),
          url(${game.pictures.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute h-[40rem] w-screen"
      ></div>
      <div className="relative min-h-screen w-full gap-2 px-4 py-4 text-lightText lg:px-10">
        <div className="mb-3 flex flex-col ">
          <h1 className="h-fit font-heading text-3xl font-black tracking-wide text-white xs:text-4xl">
            {game.name}
          </h1>
          <p className="font-content text-sm font-light text-darkText xs:text-base">
            by <span className="italic">{game.publisher}</span>
          </p>
          <p className="font-content text-sm font-light text-darkText xs:text-base">
            Release Date: <span className="italic">{game.releaseDate}</span>
          </p>
        </div>
        <div className="justify-between gap-5 md:flex">
          <section className="mx-auto my-0 overflow-hidden md:min-w-[60%]">
            <ImageSlider pictures={game.pictures} />
          </section>
          <div className="flex flex-col-reverse pt-3 md:flex-col md:pt-0">
            <GameAbout desc={game.description} />
            <div className="flex items-center gap-2">
              <div className="flex w-full flex-wrap items-center justify-between rounded-lg bg-darkBg2 px-4 py-2 font-heading text-base xs:text-xl">
                <p className="font-bold">{numberToRupees(game.price)}</p>
                <button
                  role="button"
                  className={`rounded-lg px-2 py-1 font-medium duration-300 ${
                    cart.includes(game.id)
                      ? `text-success`
                      : `text-lightText hover:text-darkHover`
                  }`}
                  onClick={() => addToCart(game.id, game.price)}
                >
                  {cart.includes(game.id) ? "Added" : "Add"} to cart
                </button>
              </div>
              <figure className="rounded-lg bg-darkBg2 p-3">
                <img
                  src={game.isFavorite ? heartFilled : heartEmpty}
                  alt="Wishlist Icon"
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
          <h3 className="border-b-2 font-heading text-xl font-bold tracking-wider xs:text-2xl">
            Requirements
          </h3>
          <div className="mt-3 grid gap-4 ss:flex">
            <div className="flex-[50%]">
              <p className="text-base italic xs:text-lg">Minimum</p>
              <GameRequirements req={game.requirements.minimum} />
            </div>
            <hr />
            <div className="flex-[50%]">
              <p className="text-base italic xs:text-lg">Recommended</p>
              <GameRequirements req={game.requirements.recommended} />
            </div>
          </div>
        </section>
        <section className="mt-3 rounded-lg bg-darkBg2 px-4 py-3">
          <p className="font-heading text-lg xs:text-xl">
            Tags:{" "}
            <span className="font-content text-base xs:text-lg">
              {game.genre.join(", ")}
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}

GameDetail.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default GameDetail;
