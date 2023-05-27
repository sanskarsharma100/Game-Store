import React, { useRef } from "react";
import PropTypes, { func } from "prop-types";
import { useState } from "react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgScroll = useRef(null);

  function previousSlide() {
    const newIndex = currentIndex == 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  }
  function nextSlide() {
    const newIndex = currentIndex == images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  }

  function scrollToIndex(index) {
    const listNode = imgScroll.current;
    const imgNode = listNode.querySelectorAll(".imgListDiv > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  function slideToImage(index) {
    setCurrentIndex(index);
    scrollToIndex(index);
  }

  const dots = images.map((img, index) => (
    <button
      key={img + index}
      className={`m-1 h-[10px] w-[10px] rounded-lg duration-300 ${
        index == currentIndex ? `bg-neonPink` : `bg-white`
      }`}
      onClick={() => slideToImage(index)}
    ></button>
  ));

  const slider = images.map((img, index) => (
    <React.Fragment key={index + img}>
      <figure
        style={{
          backgroundImage: `url(${img})`,
          transform: `translateX(${-(currentIndex * 100)}%)`,
        }}
        className="h-full min-w-full rounded-lg bg-cover bg-center duration-500 ease-in-out"
      ></figure>
    </React.Fragment>
  ));

  const imgList = images.map((img, index) => (
    <img
      src={img}
      alt="gameImg"
      key={img + index}
      className={`h-16 hover:cursor-pointer ${
        index == currentIndex && `border-2 border-neonPink`
      }`}
      onClick={() => slideToImage(index)}
    />
  ));

  return (
    <div>
      <div className="relative flex aspect-video h-full w-full">
        {slider}
        <button
          className="group absolute left-0 top-0 h-full w-[12%] rounded-l-lg duration-300 hover:bg-semiDark"
          onClick={previousSlide}
        >
          <span className="arrow left float-left ml-[40%] duration-300 group-hover:ml-[30%]"></span>
        </button>
        <button
          className="group absolute right-0 top-0 h-full w-[12%] rounded-r-lg duration-300 hover:bg-semiDark"
          onClick={nextSlide}
        >
          <span className="arrow right float-right mr-[40%] duration-300 group-hover:mr-[30%]"></span>
        </button>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2">
          {dots}
        </div>
      </div>
      <div
        ref={imgScroll}
        className="imgListDiv relative mt-4 flex h-full w-full gap-2 overflow-x-scroll scroll-smooth pb-1"
      >
        {imgList}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;
