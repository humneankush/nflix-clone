import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWY3NDJlNzZmYTFlMzA3ODMyMGZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTY5NDgyMiwiZXhwIjoxNjMwMTI2ODIyfQ.CaXe3vR0RXO2UlHReDo9C0YVkZqVDny4jNfap9j9dZw",
            },
          }
        );

        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
    </div>
  );
};
