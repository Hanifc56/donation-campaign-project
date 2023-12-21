import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCards } from "../../Utility/localStorage";

const Donation = () => {
  const cards = useLoaderData();
  const [donationCards, setDonationCards] = useState([]);
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
      <div className="my-12 mx-auto grid lg:grid-cols-2 gap-6">
        {donationCards.map((card) => (
          <div card={card} key={card.id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
