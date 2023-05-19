import PropTypes from "prop-types";
import { useState } from "react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousSlide() {
    const newIndex = currentIndex == 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function nextSlide() {
    const newIndex = currentIndex == images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const dots = images.map((img, index) => (
    <button
      key={index + img}
      className={`m-1 h-[10px] w-[10px] rounded-lg duration-300 ${
        index == currentIndex ? `bg-neonPink` : `bg-white`
      }`}
      onClick={() => setCurrentIndex(index)}
    ></button>
  ));

  return (
    <div className="relative h-full">
      <figure
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className={`h-full w-full rounded-lg bg-cover bg-center`}
      ></figure>
      <button
        className="group absolute left-0 top-0 h-full w-[12%] duration-300 hover:bg-semiDark"
        onClick={previousSlide}
      >
        <span className="arrow left float-left duration-300 ml-[40%] group-hover:ml-[30%]"></span>
      </button>
      <button
        className="group absolute right-0 top-0 h-full w-[12%] duration-300 hover:bg-semiDark"
        onClick={nextSlide}
      >
        <span className="arrow right float-right duration-300 mr-[40%] group-hover:mr-[30%]"></span>
      </button>
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2">
        {dots}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;
