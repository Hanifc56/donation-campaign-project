import { useEffect, useState } from "react";
import DonationCategory from "../DonationCategory/DonationCategory";
import Header from "../Header/Header";

// const Home = () => {
//   const [donationCard, setDonationCard] = useState([]);
//   const [displayCards, setDisplayCards] = useState([]);

//   const [text, setText] = useState("");
//   console.log(displayCards);

//   const handleCardCategory = (filter) => {
//     let filteredCards = [];

//     if (filter === "") {
//       filteredCards = displayCards.length ? displayCards : donationCard;
//     } else {
//       filteredCards = donationCard.filter((card) =>
//         card.category.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//     setDisplayCards(filteredCards);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setText(e.target.name.value);
//     console.log(text);
//   };
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   useEffect(() => {
//     fetch("data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setDonationCard(data);
//         setDisplayCards(data);
//       });
//   }, []);
//   return (
//     <div>
//       <Header
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         handleCardCategory={handleCardCategory}
//       ></Header>
//       <DonationCategory donationCard={displayCards}></DonationCategory>
//     </div>
//   );
// };

const Home = () => {
  const [donationCard, setDonationCard] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [text, setText] = useState("");

  const handleCardCategory = (filter) => {
    if (filter === "") {
      setDisplayCards(donationCard);
    } else {
      const filteredCards = donationCard.filter(
        (card) => card.category.toLowerCase() === filter.toLowerCase()
      );
      setDisplayCards(filteredCards);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.name.value;
    setText(category);
    handleCardCategory(category);
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
