const getStoredCards = () => {
  const storedCards = localStorage.getItem("donation-cards");
  if (storedCards) {
    return JSON.parse(storedCards);
  }
  return [];
};
const saveDonationCards = (id) => {
  const storedDonationCards = getStoredCards();
  const exists = storedDonationCards.find((cardId) => cardId == id);
  if (!exists) {
    storedDonationCards.push(id);
    localStorage.setItem("donation-cards", JSON.stringify(storedDonationCards));
  }
};

export { getStoredCards, saveDonationCards };
