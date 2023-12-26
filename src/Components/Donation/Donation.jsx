import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCards } from "../../Utility/localStorage";

const Donation = () => {
  const cards = useLoaderData();
  const [donationCards, setDonationCards] = useState([]);
  const [dataLength, SetDataLength] = useState(4);
  useEffect(() => {
    const storedCardId = getStoredCards();
    if (cards.length > 0) {
      const cardDonated = [];
      for (const id of storedCardId) {
        const card = cards.find((card) => card.id === id);
        if (card) {
          cardDonated.push(card);
        }
        setDonationCards(cardDonated);
        console.log(cards, storedCardId);
      }
    }
  }, [cards]);
  return (
    <div className="max-w-6xl mx-auto pt-36">
      <div className="my-12 lg:mx-auto px-2 md:grid-cols-2 grid lg:grid-cols-2 gap-6">
        {donationCards.slice(0, dataLength).map((card) => (
          <div card={card} key={card.id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={card.picture_rectangular}
                  alt="Donation"
                  className="h-full"
                />
              </figure>
              <div
                style={{ backgroundColor: card.card_bg }}
                className="card-body rounded-r-lg"
              >
                <p className="  ">
                  <small
                    style={{
                      backgroundColor: card.category_bg,
                      color: card.text_button_bg,
                    }}
                    className="rounded-md py-1 px-3 text-sm font-medium"
                  >
                    {card.category}
                  </small>
                </p>
                <h2 className=" text-xl font-semibold">{card.title}</h2>

                <p
                  style={{
                    color: card.text_button_bg,
                  }}
                  className="text-md font-semibold"
                >
                  {card.price}
                </p>
                <div className="card-actions justify-start">
                  <Link to={`/card/${card.id}`}>
                    <button
                      style={{ backgroundColor: card.text_button_bg }}
                      className="text-white font-semibold text-base px-4 py-2 rounded-lg"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          dataLength === donationCards.length
            ? "hidden"
            : `flex justify-center items-center my-10`
        }
      >
        <button
          onClick={() => SetDataLength(donationCards.length)}
          className="text-base text-white font-semibold bg-[#009444] rounded-lg px-7 py-4"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
