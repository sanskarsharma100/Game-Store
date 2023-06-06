import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function ImageSlider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgScroll = useRef(null);

  function previousSlide() {
    const newIndex =
      currentIndex == 0 ? pictures.compressed.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  }
  function nextSlide() {
    const newIndex =
      currentIndex == pictures.compressed.length - 1 ? 0 : currentIndex + 1;
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

  const dots = pictures.compressed.map((img, index) => (
    <button
      role="button"
      key={img + index}
      className={`m-1 h-[10px] w-[10px] rounded-lg duration-300 ${
        index == currentIndex ? `bg-neonPink` : `bg-white`
      }`}
      onClick={() => slideToImage(index)}
    ></button>
  ));

  const slider = pictures.original.map((img, index) => (
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

  const imgList = pictures.compressed.map((img, index) => (
    <img
      src={img}
      alt="Game Photo"
      key={img + index}
      className={`h-12 hover:cursor-pointer xs:h-16 ${
        index == currentIndex && `border-2 border-neonPink`
      }`}
      onClick={() => slideToImage(index)}
      loading="lazy"
    />
  ));

  return (
    <div>
      <div className="relative flex aspect-video h-full w-full">
        {slider}
        <button
          role="button"
          className="group absolute left-0 top-0 h-full w-[12%] rounded-l-lg duration-300 hover:bg-semiDark"
          onClick={previousSlide}
        >
          <span className="left float-left ml-[40%] border-b-8 border-r-8 p-2 duration-300 group-hover:ml-[30%] xs:p-3"></span>
        </button>
        <button
          role="button"
          className="group absolute right-0 top-0 h-full w-[12%] rounded-r-lg duration-300 hover:bg-semiDark"
          onClick={nextSlide}
        >
          <span className="right float-right mr-[40%] border-b-8 border-r-8 p-2 duration-300 group-hover:mr-[30%] xs:p-3"></span>
        </button>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2">
          {dots}
        </div>
      </div>
      <div
        ref={imgScroll}
        className="imgListDiv slider-scrollbar relative mt-4 flex h-full w-full gap-2 overflow-x-scroll scroll-smooth pb-1"
      >
        {imgList}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  pictures: PropTypes.object,
};

export default ImageSlider;
