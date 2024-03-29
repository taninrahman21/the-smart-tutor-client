import React, { useContext } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    fetch(
      `https://the-smart-tutor-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://the-smart-tutor-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myReviews.filter((review) => review._id !== id);
          setMyReviews(remaining);
          toast.success("Review delete successfully!");
        }
      });
  };

  return (
    <div className="py-20 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Reviews</h1>
        <div className="h-1 w-10 bg-red-500 mx-auto mt-4"></div>
      </div>
      {myReviews?.length > 0 ? (
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
          {myReviews?.map((revw) => (
            <div
              key={revw._id}
              className="border rounded-sm px-4 py-3 bg-gray-50"
            >
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Service Name: {revw.serviceName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Review: {revw.massage}
              </p>
              <div className="flex justify-between mt-3">
                <button
                  className="text-white bg-green-600 hover:bg-green-700 font-medium text-base px-4 py-1"
                >
                  <Link to={`/update-review/${revw._id}`}>Edit Review</Link>
                </button>
                <button
                  onClick={() => handleDelete(revw._id)}
                  className="text-white bg-[#9c380c] hover:bg-[#912f06] font-medium text-base px-4 py-1"
                >
                  Delete Review
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-20 text-3xl">No reviews were added</p>
      )}

      {/* <div className="flex flex-col w-fit items-center absolute top-1/2 left-[30%] border border-red-800 p-4 bg-white">
        <h3>Tanin Rahman</h3>
        <input type="text" className="py-3 px-2 block" />
        <button className="mt-2 text-white bg-green-600 hover:bg-green-700 font-medium text-base px-4 py-1">
          Update Review
        </button>
      </div> */}

    </div>
  );
};

export default MyReviews;
