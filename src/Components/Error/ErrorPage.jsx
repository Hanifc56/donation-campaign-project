import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center text-black">
        Opps!!! <span className="text-red-500 font-bold">404 Error</span>
      </h1>
      <div className="mx-auto mt-8 text-center">
        <Link className="btn btn-error text-white" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
