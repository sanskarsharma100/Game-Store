import PropTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";

function SortBy({
  sortBy,
  sortByValues,
  showSortByMenu,
  handleSortBy,
  toggleSortByMenu,
}) {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleSortByMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSortByMenu]);

  const sortByOptions = sortByValues.map((item) => (
    <div
      key={item.id}
      className="p-[3%] hover:cursor-pointer hover:text-darkHover"
      onClick={handleSortBy}
    >
      {item.value}
    </div>
  ));

  return (
    <div className="mb-4 flex max-w-xs items-center gap-2 font-content">
      <span className="whitespace-nowrap">Sort By:</span>
      <div className="relative w-full">
        <button
          className="w-full rounded-lg border border-lightText bg-darkBg2 p-[3%] text-left"
          onClick={toggleSortByMenu}
          role="button"
        >
          {sortBy}
        </button>
        {showSortByMenu && (
          <div
            ref={dropdownRef}
            className="absolute z-[8000] mt-1 w-full rounded-lg bg-darkBg2"
          >
            {sortByOptions}
          </div>
        )}
      </div>
    </div>
  );
}

SortBy.propTypes = {
  sortBy: PropTypes.string,
  sortByValues: PropTypes.arrayOf(PropTypes.object),
  showSortByMenu: PropTypes.bool,
  handleSortBy: PropTypes.func,
  toggleSortByMenu: PropTypes.func,
};

export default SortBy;
