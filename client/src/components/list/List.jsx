import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  // ref is used for listref
  const listRef = useRef();
  // this is used for the direction of our list container
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);

      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={item} />
          ))}
        </div>

        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
