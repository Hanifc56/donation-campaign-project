import Dcard from "../DCard/Dcard";

const DonationCategory = ({ displayCards }) => {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {displayCards.map((card) => (
          <Dcard card={card} key={card.id}></Dcard>
        ))}
      </div>
    </div>
  );
};

export default DonationCategory;
