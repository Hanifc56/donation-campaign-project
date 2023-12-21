import { useEffect, useState } from "react";

const Header = () => {
  const [displayCards, setDisplayCards] = useState([]);

  const handleCardCategory = (filter) => {
    if (filter === "") {
      setDisplayCards(displayCards);
    } else if (filter === "food") {
      const foodCategory = displayCards.filter(
        (card) => card.category === "Food"
      );
      setDisplayCards(foodCategory);
    } else if (filter === "health") {
      const healthCategory = displayCards.filter(
        (card) => card.categor === "Health"
      );
      setDisplayCards(healthCategory);
    }
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDisplayCards(data));
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen static bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url(https://i.postimg.cc/kgX3f27y/donation.jpg)",
        }}
      >
        <div className="hero-overlay   bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center items-center mt-10   lg:w-[480px]  mx-auto">
              <input
                type="text"
                placeholder="Search here...."
                className="font-normal text-sm  pl-7 py-5 lg:pr-40 outline-none  text-black bg-white border-l border-t border-b rounded-l-lg border-[#928888]  "
              />
              <button
                onClick={handleCardCategory}
                type="button"
                value=""
                className="bg-[#FF444A] pr-7 pl-7 py-4 text-lg font-semibold text-white rounded-r-lg outline-none border border-[#FF444A]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
