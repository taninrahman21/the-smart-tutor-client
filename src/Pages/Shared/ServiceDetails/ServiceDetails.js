import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";

const ServiceDetails = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const { name, price, image, description, ratings, _id } = useLoaderData();
  const location = useLocation();

  const handleUploadReview = (event) => {
    event.preventDefault();
    const massage = event.target.comments.value;
    const review = {
      serviceId: _id,
      serviceName: name,
      userPhoto: user?.photoURL,
      userEmail: user?.email,
      userName: user?.displayName,
      review: massage,
      serviceImg: image,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Reviewed!");
          event.target.reset();
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <div className="w-5/6 mx-auto mt-8">
      <Toaster position="top-center" reverseOrder={false} />
      <img className="h-[250px] w-2/4 mx-auto" src={image} alt="" />
      <h1 className="text-3xl font-semibold mt-5">Service Name: {name}</h1>
      <p className="text-3xl font-semibold mt-2">Price: {price}</p>
      <p className="text-3xl font-semibold mt-2">Ratings: {ratings}</p>
      <p className="text-2xl font-semibold mt-6">
        About Service: {description}
      </p>
      <div className="my-10">
        <p className="text-2xl text-center font-semibold">Public Reviews</p>
        {reviews?.length > 0 ? <div className="my-10">
          {
            reviews.map(review => <div key={review._id} className='border-b-2 p-5'>
              {
                review.userPhoto ? <img className="w-[60px] rounded-lg mb-2" src={review.userPhoto} alt="userImage" /> 
                : <FaUserAlt className="w-[60px] rounded-lg mb-2"/>
              }
              <h1>Name: {review.userName}</h1>
              <p>Review: {review.review}</p>
              </div>)
          }
        </div>: (
          <p className="text-2xl text-center font-semibold text-slate-600">
            No reviews for this item.
          </p>
        )}
      </div>

      {/* Reviews */}
      <div>
        {user?.email ? (
          <div>
            <form onSubmit={handleUploadReview}>
              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    name="comments"
                    rows="4"
                    className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write your massage..."
                    required=""
                  ></textarea>
                </div>
                <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Add Review
                  </button>
                  <div className="flex pl-0 space-x-1 sm:pl-2">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Set location</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
              Remember, contributions to this topic should follow our{" "}
              <span className="hover:underline text-1xl text-blue-600">
                Comunity Guidelines
              </span>{" "}
              .
            </p>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <Link to="/login" state={{from: location}} replace>
            <button
                type="button"
                className="focus:outline-none text-white bg-[#9c380c] hover:bg-[#912f06] font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Login to add a review
              </button>
            </Link>
          </div>
        )}
      </div>
      {/* Reviews */}
    </div>
  );
};

export default ServiceDetails;
