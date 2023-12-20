import { Link } from "react-router-dom";

const Dcard = ({ card }) => {
  const { id, picture, card_bg, title, category, category_bg, text_button_bg } =
    card;

  return (
    <div className="">
      <Link to={`/card/${id}`}>
        <div className="card mx-auto card-compact w-[300px] bg-base-100 ">
          <figure>
            <img src={picture} alt="" />
          </figure>
          <div
            style={{ backgroundColor: card_bg }}
            className="card-body rounded-b-lg"
          >
            <p className="  ">
              <small
                style={{
                  backgroundColor: category_bg,
                  color: text_button_bg,
                }}
                className="rounded-md py-1 px-3 text-sm font-medium"
              >
                {category}
              </small>
            </p>
            <h2
              style={{
                color: text_button_bg,
              }}
              className=" text-xl font-semibold"
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dcard;
