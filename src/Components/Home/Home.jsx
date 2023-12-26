import { useEffect, useState } from "react";
import DonationCategory from "../DonationCategory/DonationCategory";
import Header from "../Header/Header";

const Home = () => {
  const [donationCard, setDonationCard] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [text, setText] = useState("");

  const handleCardCategory = (filter) => {
    if (filter === "") {
      setDisplayCards(donationCard);
    } else {
      const searchCards = donationCard.filter(
        (card) => card.category.toLowerCase() === filter.toLowerCase()
      );
      setDisplayCards(searchCards);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.name.value;
    setText(category);
    handleCardCategory(category);
    console.log(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDonationCard(data);
        setDisplayCards(data);
      });
  }, []);

  return (
    <div>
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCardCategory={handleCardCategory}
      />
      <DonationCategory
        donationCards={donationCard}
        displayCards={displayCards}
      />
    </div>
  );
};

export default Home;
