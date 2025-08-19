import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-center w-full text-white text-3xl p-4">
      User: {userid}
    </div>
  );
};

export default User;
