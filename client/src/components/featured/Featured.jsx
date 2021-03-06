import "./featured.scss";
import { Info, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWY3NDJlNzZmYTFlMzA3ODMyMGZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTY5NDgyMiwiZXhwIjoxNjMwMTI2ODIyfQ.CaXe3vR0RXO2UlHReDo9C0YVkZqVDny4jNfap9j9dZw",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "movies" : "series"}</span>
          <select
            name="genre"
            id="genere"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <Info />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
