const Dcard = ({ card }) => {
  const { id, picture, card_bg } = card;

  return (
    <div className="">
      <div className="card mx-auto card-compact w-[300px] bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div
          style={{ backgroundColor: card_bg }}
          className="card-body rounded-b-lg"
        >
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Dcard;
