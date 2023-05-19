import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";

function GameDetail({ gamesList, toggleFavourite }) {
  const params = useParams();
  const game = gamesList[params.id - 1];

  return (
    <div className="relative min-h-screen w-full gap-2 bg-darkBg px-2 py-4 text-lightText">
      <h1 className="text-center font-heading text-4xl font-black h-fit xs:text-left">
        {game.name}
      </h1>
      <section className="aspect-[16/9] my-0 mx-auto"> 
        <ImageSlider images={game.preview} />
      </section>
    </div>
  );
}

GameDetail.propTypes = {
  gamesList: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func,
};

export default GameDetail;
