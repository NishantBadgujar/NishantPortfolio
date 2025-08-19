import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   let [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/NishantBadgujar")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="bg-gray-700 text-center w-full text-5xl text-white p-4 ">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="GitHub img" width={250} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/NishantBadgujar");
  return response.json();
};
