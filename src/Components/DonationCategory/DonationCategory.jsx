import { useEffect, useState } from "react";
import Dcard from "../DCard/Dcard";

const DonationCategory = () => {
  const [donationCard, setDonationCard] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonationCard(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {donationCard.map((card) => (
          <Dcard card={card} key={card.id}></Dcard>
        ))}
      </div>
    </div>
  );
};

export default DonationCategory;
