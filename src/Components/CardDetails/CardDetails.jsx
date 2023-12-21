import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import "./CardDetails.css";
import { saveDonationCards } from "../../Utility/localStorage";
const CardDetails = () => {
  const cards = useLoaderData();
  console.log(cards);
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  console.log(card, id);
  const { title, picture, price, text_button_bg, description } = card;

  const handleCardDetails = () => {
    saveDonationCards(idInt);
    toast("Donation Completed!!");
  };
  return (
    <div className="max-w-6xl mx-auto pt-36">
      <div className=" my-12 mx-auto">
        <div className="rounded-lg img-container shadow-md">
          <figure>
            <img src={picture} alt="Shoes" className="img rounded-lg   " />
          </figure>
          <div className="overlay rounded-b-lg flex">
            <div className=" justify-start pl-9 my-auto">
              <button
                onClick={handleCardDetails}
                style={{ backgroundColor: text_button_bg }}
                className="px-6 py-4 rounded-lg text-white text-xl font-semibold"
              >
                Donate {price}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <h1 className="text-4xl font-bold pb-6">{title}</h1>
        <p className="font-normal text-md">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
